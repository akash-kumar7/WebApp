import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-white/10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-background/90 to-primary/10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transforming Ideas into
            <div className="gradient-heading">Digital Reality</div>
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We craft cutting-edge applications and digital solutions that drive business success. From concept to deployment, we're your partner in digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90" asChild>
              <a href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
              <a href="#portfolio">
                View Our Work
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}