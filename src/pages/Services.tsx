import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Your vision, our expertise
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            A seamless process from concept to completion
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              We've refined our process to be clear, collaborative, and enjoyable
              for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Discovery",
                description:
                  "It all starts with a conversation. We'll walk through your space and listen. We want to understand your goals, lifestyle, budget, and what 'home' means to you.",
              },
              {
                step: "02",
                title: "Concept & Design",
                description:
                  "This is where your vision takes shape. We'll present a comprehensive design plan, including floor plans, mood boards, color palettes, and material selections.",
              },
              {
                step: "03",
                title: "Sourcing & Procurement",
                description:
                  "We use our network of trusted vendors and artisans to source every item for your home. We handle all the ordering, tracking, and logistics.",
              },
              {
                step: "04",
                title: "Installation & The Reveal",
                description:
                  "The best part. We coordinate all deliveries and installations, placing every piece and styling every detail. You just walk in and enjoy your new home.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-serif font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our Service Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full-Service Design */}
            <div className="bg-muted p-8 md:p-10 rounded-lg animate-slide-in-left">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Full-Service Interior Design
              </h3>
              <p className="text-muted-foreground mb-6">
                This is our signature, all-inclusive package, perfect for new
                builds, large-scale renovations, or whole-home furnishing. We
                manage every single detail from the initial blueprint to the
                final, styled reveal.
              </p>
              <div className="mb-6">
                <p className="font-semibold mb-3">Best for:</p>
                <p className="text-muted-foreground">
                  Clients who want a professionally managed, stress-free
                  experience and a complete home transformation.
                </p>
              </div>
              <div className="space-y-2 mb-8">
                <p className="font-semibold mb-3">Includes:</p>
                {[
                  "Concept development",
                  "Space planning",
                  "Full sourcing & procurement",
                  "Project management",
                  "Installation & styling",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full">
                <Link to="/#envision">Get Started</Link>
              </Button>
            </div>

            {/* E-Design */}
            <div className="bg-muted p-8 md:p-10 rounded-lg animate-slide-in-right">
              <h3 className="text-3xl font-serif font-bold mb-4">
                E-Design Package
              </h3>
              <p className="text-muted-foreground mb-6">
                Perfect for clients who want our design expertise but are happy to
                manage the procurement and installation themselves. We provide a
                complete digital roadmap for you to execute on your own time.
              </p>
              <div className="mb-6">
                <p className="font-semibold mb-3">Best for:</p>
                <p className="text-muted-foreground">
                  DIY-savvy clients, single-room makeovers, or those outside our
                  typical service area.
                </p>
              </div>
              <div className="space-y-2 mb-8">
                <p className="font-semibold mb-3">Includes:</p>
                {[
                  "Digital mood board",
                  "To-scale floor plan",
                  "Curated shopping list",
                  "Direct product links",
                  "Design guidance document",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link to="/#envision">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
