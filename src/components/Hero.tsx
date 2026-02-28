import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wood.jpg";
import { TreePine, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maderas nobles de carpintería"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <TreePine className="w-8 h-8 text-warm-gold" />
          <span className="text-warm-gold font-body text-sm tracking-[0.3em] uppercase font-semibold">
            Enciclopedia de la Madera
          </span>
          <TreePine className="w-8 h-8 text-warm-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-tight"
        >
          El Arte de la{" "}
          <span className="italic text-warm-gold">Carpintería</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-primary-foreground/80 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Descubre los secretos de las maderas más nobles del mundo, las herramientas esenciales
          y las técnicas que transforman la madera en obras maestras.
        </motion.p>

        <motion.a
          href="#maderas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary/90 transition-colors"
        >
          Explorar Maderas
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
