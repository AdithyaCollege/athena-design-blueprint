import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import designerImage from "@/assets/designer-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Designing for the life you want to live
          </h1>
        </div>
      </section>

      {/* Meet the Designer */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src={designerImage}
                alt="Interior Designer"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Meet the Designer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi, I'm the founder and lead designer at Athena Designs.
                </p>
                <p>
                  For me, interior design isn't just about aesthetics; it's about
                  feeling. It's about walking into a room and feeling an immediate
                  sense of calm, joy, or inspiration. My passion is to translate
                  your personality and story into a physical space that not only
                  looks stunning but also functions perfectly for your life.
                </p>
                <p>
                  With over a decade of experience transforming homes and
                  commercial spaces, I've learned that the best designs come from
                  truly listening to my clients and understanding their unique
                  vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe a home should be your sanctuary. In a world that's loud
              and fast, your personal space should be the one place that is
              entirely, authentically you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">
                Timeless Style
              </h3>
              <p className="text-muted-foreground">
                We create spaces that will feel relevant and beautiful for years
                to come, not just for a season.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">
                Livability
              </h3>
              <p className="text-muted-foreground">
                A home must be lived in. We balance beauty with practicality,
                creating functional, durable spaces for real life.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">
                A Personal Process
              </h3>
              <p className="text-muted-foreground">
                This is your home, not ours. We're here to listen, guide, and
                collaborate—to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
