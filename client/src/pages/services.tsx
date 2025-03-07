import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, Smartphone, Globe, Brush } from "lucide-react";
import { useLocation } from "wouter";

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technology to meet your unique business needs.",
    link: "/services/software-development"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    link: "/services/mobile-development"
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Responsive and scalable web applications using modern frameworks and best practices.",
    link: "/services/web-development"
  },
  {
    icon: <Brush className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for optimal engagement.",
    link: "/services/design"
  }
];

export default function ServicesPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding relative bg-muted/30">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background/5" />
        <div className="absolute inset-0 -z-10 bg-grid-white/5 opacity-50" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our comprehensive range of digital solutions tailored to help your business thrive in the modern world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setLocation(service.link)}
                className="cursor-pointer"
              >
                <Card className="h-full gradient-border bg-gradient-to-br from-card to-card/50 border-primary/10 overflow-hidden group">
                  <CardHeader>
                    <div className="mb-4 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground/90 group-hover:text-muted-foreground transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}