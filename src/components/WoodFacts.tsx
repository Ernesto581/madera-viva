import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const facts = [
  {
    text: "La teca puede durar más de 100 años en exteriores sin tratamiento gracias a sus aceites naturales.",
    source: "Tectona grandis",
  },
  {
    text: "Un roble tarda entre 150 y 300 años en alcanzar su madurez para ser aprovechado como madera.",
    source: "Quercus robur",
  },
  {
    text: "La caoba fue tan valiosa en el siglo XVIII que los piratas asaltaban barcos cargados con ella.",
    source: "Swietenia macrophylla",
  },
  {
    text: "El nogal cambia de color con los años: empieza muy oscuro y se aclara con la exposición a la luz.",
    source: "Juglans regia",
  },
  {
    text: "La técnica de cola de milano lleva usándose más de 7.000 años, desde el antiguo Egipto.",
    source: "Historia de la carpintería",
  },
  {
    text: "El cerezo puede oscurecerse varios tonos en solo 6 meses de exposición solar.",
    source: "Prunus avium",
  },
];

const WoodFacts = () => {
  // Pick 2 random facts that are different each render
  const shuffled = [...facts].sort(() => Math.random() - 0.5).slice(0, 2);

  return (
    <section className="py-16 px-6 bg-primary/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase font-semibold">
            ¿Sabías que...?
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shuffled.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 border border-border flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-body leading-relaxed">{fact.text}</p>
                <p className="text-muted-foreground text-xs font-body mt-2 italic">{fact.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoodFacts;
