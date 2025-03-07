import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-white/10 animate-[fade-in_1s_ease-in-out]" />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-background/90 to-primary/10" />

      {/* Radial Gradient Effect */}
      <div className="absolute inset-0 -z-10 bg-radial-gradient opacity-30" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl relative">
          {/* Decorative Element */}
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transforming Ideas into
            <div className="gradient-heading text-glow">Digital Reality</div>
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We craft cutting-edge applications and digital solutions that drive business success. From concept to deployment, we're your partner in digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/50"
              asChild
            >
              <a href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-effect hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="#portfolio">
                View Our Work
              </a>
            </Button>
          </motion.div>

          {/* Floating Element */}
          <motion.div
            className="absolute -right-20 top-0 w-40 h-40 bg-primary/5 rounded-full floating hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}