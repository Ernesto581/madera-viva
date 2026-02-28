import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine } from "lucide-react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Animated icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 15, delay: 0.1 }}
        className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
      >
        <TreePine className="w-10 h-10 text-primary" />
      </motion.div>

      {/* App name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-display text-4xl font-bold text-foreground mb-2"
      >
        MaderaViva
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-body text-muted-foreground text-sm tracking-wide"
      >
        El arte de la carpintería
      </motion.p>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-10 w-48 h-1 bg-muted rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.3, delay: 0.9, ease: "easeInOut" }}
          className="h-full bg-primary rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

const SplashWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SplashWrapper;
