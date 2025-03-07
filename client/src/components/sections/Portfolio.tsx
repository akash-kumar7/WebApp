import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "Mobile App Development",
    description: "Cross-platform delivery app",
    image: "https://images.unsplash.com/photo-1602530647473-df16ffe2475d"
  },
  {
    title: "Web Development",
    description: "E-commerce platform",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4"
  },
  {
    title: "Enterprise Solutions",
    description: "Business management system",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
