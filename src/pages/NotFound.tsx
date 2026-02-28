import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { TreePine, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8"
        >
          <TreePine className="w-12 h-12 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-7xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-display text-2xl font-semibold text-foreground mb-3"
        >
          Página no encontrada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-muted-foreground font-body mb-2"
        >
          La ruta <code className="text-sm bg-muted px-2 py-0.5 rounded">{location.pathname}</code> no existe en MaderaViva.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-muted-foreground font-body text-sm mb-8"
        >
          Parece que esta madera aún no ha sido tallada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </a>
          <a
            href="/#maderas"
            className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-body font-semibold hover:bg-muted transition-colors"
          >
            <Search className="w-4 h-4" />
            Explorar maderas
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
