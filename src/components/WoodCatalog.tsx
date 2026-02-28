import { useState } from "react";
import { motion } from "framer-motion";
import { woodSpecies, type WoodSpecies } from "@/data/woodData";
import { Badge } from "@/components/ui/badge";
import { Ruler, Weight, Shield, Wrench, MapPin, X } from "lucide-react";

const WoodCard = ({ wood, onClick }: { wood: WoodSpecies; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-card rounded-xl p-6 text-left border border-border hover:border-primary/40 hover:shadow-lg transition-shadow group w-full"
  >
    <div className="flex items-start justify-between mb-3">
      <span className="text-4xl">{wood.image}</span>
      <Badge variant={wood.type === "hardwood" ? "default" : "secondary"} className="text-xs">
        {wood.type === "hardwood" ? "Dura" : "Blanda"}
      </Badge>
    </div>
    <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
      {wood.name}
    </h3>
    <p className="text-muted-foreground text-sm italic font-body mb-3">{wood.scientificName}</p>
    <p className="text-muted-foreground text-sm font-body line-clamp-2">{wood.description}</p>

    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-body">
      <span className="flex items-center gap-1">
        <Ruler className="w-3 h-3" /> {wood.hardness} Janka
      </span>
      <span className="flex items-center gap-1">
        <Shield className="w-3 h-3" /> {wood.durability}
      </span>
    </div>
  </motion.button>
);

const WoodDetail = ({ wood, onClose }: { wood: WoodSpecies; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 border border-border shadow-2xl"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="text-5xl mb-3 block">{wood.image}</span>
          <h2 className="font-display text-3xl font-bold text-foreground">{wood.name}</h2>
          <p className="text-muted-foreground italic font-body">{wood.scientificName}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      <p className="text-foreground/80 font-body leading-relaxed mb-6">{wood.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { icon: Ruler, label: "Dureza Janka", value: `${wood.hardness} lbf` },
          { icon: Weight, label: "Densidad", value: `${wood.density} kg/m³` },
          { icon: Wrench, label: "Trabajabilidad", value: wood.workability },
          { icon: Shield, label: "Durabilidad", value: wood.durability },
          { icon: MapPin, label: "Origen", value: wood.origin },
        ].map((item) => (
          <div key={item.label} className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-body mb-1">
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </div>
            <p className="font-body font-semibold text-foreground text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-display text-sm font-semibold text-foreground mb-2">Color</h4>
        <p className="text-muted-foreground text-sm font-body">{wood.color}</p>
      </div>

      <div>
        <h4 className="font-display text-sm font-semibold text-foreground mb-2">Usos principales</h4>
        <div className="flex flex-wrap gap-2">
          {wood.uses.map((use) => (
            <Badge key={use} variant="outline" className="text-xs font-body">{use}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const WoodCatalog = () => {
  const [selected, setSelected] = useState<WoodSpecies | null>(null);
  const [filter, setFilter] = useState<"all" | "hardwood" | "softwood">("all");

  const filtered = filter === "all" ? woodSpecies : woodSpecies.filter((w) => w.type === filter);

  return (
    <section id="maderas" className="py-24 px-6 bg-grain">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase font-semibold">
            Catálogo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Tipos de Madera
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Explora las especies más utilizadas en carpintería, con datos técnicos y características detalladas.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {([["all", "Todas"], ["hardwood", "Duras"], ["softwood", "Blandas"]] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all ${
                filter === key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((wood, i) => (
            <motion.div
              key={wood.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <WoodCard wood={wood} onClick={() => setSelected(wood)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && <WoodDetail wood={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default WoodCatalog;
