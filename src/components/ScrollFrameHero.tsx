import { useEffect, useRef, useState } from "react";
import JSZip from "jszip";

const ScrollFrameHero = ({ children }: { children?: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Defer heavy zip loading to after initial paint to improve TTI
    const timeoutId = setTimeout(() => {
    const loadFrames = async () => {
      try {
        const response = await fetch("/frames.zip");
        const blob = await response.blob();
        const zip = await JSZip.loadAsync(blob);

        // Get all jpg files sorted by name
        const fileNames = Object.keys(zip.files)
          .filter((name) => name.endsWith(".jpg") || name.endsWith(".png"))
          .sort();

        const totalFrames = fileNames.length;
        let loadedCount = 0;
        const images: HTMLImageElement[] = new Array(totalFrames);

        await Promise.all(
          fileNames.map(async (name, index) => {
            const file = zip.files[name];
            const arrayBuffer = await file.async("arraybuffer");
            const blobUrl = URL.createObjectURL(
              new Blob([arrayBuffer], { type: "image/jpeg" })
            );

            return new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => {
                images[index] = img;
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
                resolve();
              };
              img.onerror = () => resolve();
              img.src = blobUrl;
            });
          })
        );

        framesRef.current = images.filter(Boolean);
        setLoaded(true);

        // Draw first frame
        drawFrame(0);
      } catch (error) {
        console.error("Failed to load frames:", error);
      }
    };

    loadFrames();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const frames = framesRef.current;

    if (!canvas || !ctx || frames.length === 0) return;

    const frameIndex = Math.min(Math.max(0, index), frames.length - 1);
    const img = frames[frameIndex];
    if (!img) return;

    // Use devicePixelRatio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;
    ctx.scale(dpr, dpr);

    // Enable image smoothing for better upscaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Cover-fit the image
    const imgRatio = img.width / img.height;
    const canvasRatio = displayWidth / displayHeight;

    let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

    if (canvasRatio > imgRatio) {
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgRatio;
      drawX = 0;
      drawY = (displayHeight - drawHeight) / 2;
    } else {
      drawHeight = displayHeight;
      drawWidth = displayHeight * imgRatio;
      drawX = (displayWidth - drawWidth) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollableHeight = container.offsetHeight - window.innerHeight;
        const scrollProgress = Math.min(
          Math.max(0, -rect.top / scrollableHeight),
          1
        );

        const frameIndex = Math.round(
          scrollProgress * (framesRef.current.length - 1)
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {children}

        {/* Loading indicator */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <div className="text-center">
              <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Loading experience... {loadProgress}%
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollFrameHero;
