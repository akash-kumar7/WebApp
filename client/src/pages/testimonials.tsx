import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    company: "Tech Innovators Inc.",
    content: "Working with the team was an exceptional experience. They delivered our project on time and exceeded our expectations."
  },
  {
    name: "Lisa Chen",
    company: "StartUp Solutions",
    content: "Their expertise in mobile app development helped us launch a successful product that our users love."
  },
  {
    name: "Mark Wilson",
    company: "Digital Ventures",
    content: "Professional, responsive, and technically skilled. They're now our go-to partner for all development needs."
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding relative">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-grid-white/5" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background/80" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">Client Testimonials</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Here's what our clients say about working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full card-hover gradient-border bg-gradient-to-br from-card to-card/50 border-primary/10">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <p className="mb-6 text-lg">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
