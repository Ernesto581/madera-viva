import { useState } from "react";
import { motion } from "framer-motion";
import { tools, toolCategories, type Tool } from "@/data/woodData";

const categoryKeys = Object.keys(toolCategories) as (keyof typeof toolCategories)[];

const ToolCard = ({ tool }: { tool: Tool }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all"
  >
    <span className="text-3xl block mb-3">{tool.icon}</span>
    <h4 className="font-display text-lg font-semibold text-foreground mb-1">{tool.name}</h4>
    <p className="text-muted-foreground text-sm font-body leading-relaxed">{tool.description}</p>
  </motion.div>
);

const ToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof toolCategories>("manual");

  const filtered = tools.filter((t) => t.category === activeCategory);

  return (
    <section id="herramientas" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase font-semibold">
            Equipamiento
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Herramientas Esenciales
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Las herramientas correctas marcan la diferencia entre un trabajo amateur y uno profesional.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {toolCategories[key]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
