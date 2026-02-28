import { TreePine } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <TreePine className="w-5 h-5 text-primary" />
        <span className="font-display font-bold text-lg text-foreground">MaderaViva</span>
      </div>
      <p className="text-muted-foreground text-sm font-body text-center">
        Datos basados en fuentes como{" "}
        <a href="https://www.wood-database.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          The Wood Database
        </a>{" "}
        y literatura especializada en carpintería.
      </p>
      <p className="text-muted-foreground text-xs font-body">© 2026 MaderaViva · Desarrollado por{" "}
        <a href="https://github.com/Ernesto581" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ernesto Linares</a>
      </p>
    </div>
  </footer>
);

export default Footer;
