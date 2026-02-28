import { motion } from "framer-motion";
import { techniques } from "@/data/woodData";
import { Badge } from "@/components/ui/badge";

const difficultyColor = {
  Principiante: "bg-green-100 text-green-800 border-green-200",
  Intermedio: "bg-warm-gold/20 text-accent-foreground border-warm-gold/30",
  Avanzado: "bg-cedar/15 text-cedar border-cedar/25",
};

const TechniquesSection = () => {
  return (
    <section id="tecnicas" className="py-24 px-6 bg-grain">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase font-semibold">
            Aprendizaje
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Técnicas de Carpintería
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Desde uniones básicas hasta técnicas maestras, domina el arte de trabajar la madera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((tech, i) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-semibold text-foreground">{tech.name}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-body font-medium border ${difficultyColor[tech.difficulty]}`}>
                  {tech.difficulty}
                </span>
              </div>

              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-5">
                {tech.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-body font-semibold text-foreground uppercase tracking-wider">Pasos</h4>
                {tech.steps.map((step, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-body font-bold">
                      {j + 1}
                    </span>
                    <p className="text-sm text-muted-foreground font-body">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
