import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, Smartphone, Globe, Brush } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technology to meet your unique business needs."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Responsive and scalable web applications using modern frameworks and best practices."
  },
  {
    icon: <Brush className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for optimal engagement."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
