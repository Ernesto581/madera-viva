import { useState, useEffect } from "react";
import { TreePine, Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "@/hooks/use-dark-mode";

const links = [
  { href: "#maderas", label: "Maderas" },
  { href: "#herramientas", label: "Herramientas" },
  { href: "#tecnicas", label: "Técnicas" },
  { href: "#quiz", label: "Quiz" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle: toggleDark } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <TreePine className={`w-6 h-6 ${scrolled ? "text-primary" : "text-warm-gold"}`} />
          <span className={`font-display font-bold text-xl ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            MaderaViva
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
            }`}
            aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDark}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
            }`}
            aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
