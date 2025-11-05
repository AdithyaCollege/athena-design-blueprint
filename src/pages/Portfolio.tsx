import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bedroomImage from "@/assets/project-bedroom.jpg";
import officeImage from "@/assets/project-office.jpg";

type Category = "all" | "residential" | "kitchen" | "bedroom" | "office";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const projects = [
    {
      id: 1,
      image: kitchenImage,
      title: "Modern Kitchen Redesign",
      category: "kitchen",
      description: "Complete kitchen transformation with modern fixtures and natural materials",
    },
    {
      id: 2,
      image: bedroomImage,
      title: "Serene Bedroom Retreat",
      category: "bedroom",
      description: "Cozy bedroom design with earthy tones and natural textures",
    },
    {
      id: 3,
      image: officeImage,
      title: "Productive Home Office",
      category: "office",
      description: "Functional workspace with elegant design elements",
    },
    {
      id: 4,
      image: kitchenImage,
      title: "Luxury Kitchen Remodel",
      category: "kitchen",
      description: "High-end kitchen with custom cabinetry and premium finishes",
    },
    {
      id: 5,
      image: bedroomImage,
      title: "Master Suite Makeover",
      category: "bedroom",
      description: "Tranquil master bedroom with spa-like atmosphere",
    },
    {
      id: 6,
      image: officeImage,
      title: "Creative Studio Space",
      category: "office",
      description: "Inspiring workspace designed for creativity and productivity",
    },
  ];

  const filters: { label: string; value: Category }[] = [
    { label: "All Projects", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Kitchen", value: "kitchen" },
    { label: "Bedroom", value: "bedroom" },
    { label: "Office", value: "office" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Our Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore our collection of thoughtfully designed spaces
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
