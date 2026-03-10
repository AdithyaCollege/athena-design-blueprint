import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnvisionForm from "@/components/EnvisionForm";
import heroImage from "@/assets/hero-living-room.jpg";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bedroomImage from "@/assets/project-bedroom.jpg";
import officeImage from "@/assets/project-office.jpg";
import { Star } from "lucide-react";

const Index = () => {
  const scrollToEnvision = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("envision");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Your Space, Reimagined
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Curating spaces that feel like you
          </p>
          <Button
            size="lg"
            className="h-14 px-8 text-lg"
            onClick={scrollToEnvision}
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>

      {/* Intro & Trust Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            We believe a home should be your sanctuary. At Athena Designs, we
            partner with you to create timeless, livable spaces that reflect
            your unique personality and lifestyle.
          </p>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                text: "Transformed our house into a home we absolutely love.",
                author: "Sarah M.",
              },
              {
                text: "Professional, creative, and a joy to work with.",
                author: "Michael R.",
              },
              {
                text: "Best design decision we ever made!",
                author: "Jennifer K.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm italic mb-2">"{testimonial.text}"</p>
                <p className="text-sm font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              See the transformations we've created
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: kitchenImage, title: "Modern Kitchen Redesign", category: "Kitchen" },
              { image: bedroomImage, title: "Serene Bedroom Retreat", category: "Bedroom" },
              { image: officeImage, title: "Productive Home Office", category: "Office" },
            ].map((project, index) => (
              <Link
                key={index}
                to="/portfolio"
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">{project.category}</p>
                      <h3 className="text-xl font-serif">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Envision Form */}
      <EnvisionForm />

      <Footer />
    </div>
  );
};

export default Index;
