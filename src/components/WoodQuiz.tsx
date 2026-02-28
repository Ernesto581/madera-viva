import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { woodSpecies, type WoodSpecies } from "@/data/woodData";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Ruler,
  Weight,
  Shield,
  Wrench,
  MapPin,
  Sparkles,
  Target,
  Trees,
  Hammer,
  Home,
  Palette,
  DollarSign,
  Zap,
  Eye,
  Sun,
} from "lucide-react";

/* ── Types ── */
interface QuizOption {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

interface QuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

/* ── Questions ── */
const questions: QuizQuestion[] = [
  {
    id: "project",
    title: "¿Qué vas a construir?",
    subtitle: "El tipo de proyecto determina las propiedades que necesitas",
    options: [
      { label: "Muebles de interior", value: "muebles", icon: <Home className="w-5 h-5" />, description: "Mesas, sillas, estanterías, armarios" },
      { label: "Exterior / Jardín", value: "exterior", icon: <Sun className="w-5 h-5" />, description: "Pérgolas, mesas de jardín, cercas" },
      { label: "Decoración", value: "decoracion", icon: <Palette className="w-5 h-5" />, description: "Cuencos, marcos, tallado artístico" },
      { label: "Construcción", value: "construccion", icon: <Hammer className="w-5 h-5" />, description: "Puertas, suelos, estructuras" },
    ],
  },
  {
    id: "priority",
    title: "¿Qué es lo más importante para ti?",
    subtitle: "Elige la propiedad que más valoras en la madera",
    options: [
      { label: "Durabilidad", value: "durabilidad", icon: <Shield className="w-5 h-5" />, description: "Que dure muchos años sin deteriorarse" },
      { label: "Belleza natural", value: "estetica", icon: <Eye className="w-5 h-5" />, description: "Veta bonita, color atractivo, presencia" },
      { label: "Fácil de trabajar", value: "trabajabilidad", icon: <Zap className="w-5 h-5" />, description: "Que se corte, lije y ensamble sin complicaciones" },
      { label: "Precio accesible", value: "precio", icon: <DollarSign className="w-5 h-5" />, description: "Buena relación calidad-precio" },
    ],
  },
  {
    id: "experience",
    title: "¿Cuál es tu nivel de experiencia?",
    subtitle: "Algunas maderas exigen más habilidad que otras",
    options: [
      { label: "Principiante", value: "principiante", icon: <Trees className="w-5 h-5" />, description: "Estoy empezando en la carpintería" },
      { label: "Intermedio", value: "intermedio", icon: <Wrench className="w-5 h-5" />, description: "Tengo algo de práctica con proyectos básicos" },
      { label: "Avanzado", value: "avanzado", icon: <Target className="w-5 h-5" />, description: "Manejo herramientas y técnicas con soltura" },
    ],
  },
  {
    id: "finish",
    title: "¿Qué acabado prefieres?",
    subtitle: "El tono natural de la madera influye en el resultado final",
    options: [
      { label: "Tonos claros", value: "claro", icon: <Sparkles className="w-5 h-5" />, description: "Blancos, crema, amarillos suaves" },
      { label: "Tonos medios", value: "medio", icon: <Sparkles className="w-5 h-5" />, description: "Dorados, marrones cálidos" },
      { label: "Tonos oscuros", value: "oscuro", icon: <Sparkles className="w-5 h-5" />, description: "Chocolate, rojizos, caoba" },
      { label: "Me da igual", value: "cualquiera", icon: <Sparkles className="w-5 h-5" />, description: "Lo importante es la funcionalidad" },
    ],
  },
];

/* ── Scoring engine ── */
function scoreWoods(answers: Record<string, string>): { wood: WoodSpecies; score: number; reasons: string[] }[] {
  return woodSpecies
    .map((wood) => {
      let score = 0;
      const reasons: string[] = [];

      // Project type scoring
      const project = answers.project;
      if (project === "muebles") {
        if (wood.uses.some((u) => /mueble|ebanist|armario|silla/i.test(u))) { score += 3; reasons.push("Ideal para muebles de interior"); }
      } else if (project === "exterior") {
        if (wood.durability === "Muy Alta" || wood.durability === "Alta") { score += 4; reasons.push("Alta resistencia a la intemperie"); }
        if (wood.uses.some((u) => /exterior|jardín|barco|embarcacion|cubierta/i.test(u))) { score += 3; reasons.push("Usada en exteriores"); }
      } else if (project === "decoracion") {
        if (wood.uses.some((u) => /torneado|instrumento|tallado|ebanist|fino/i.test(u))) { score += 3; reasons.push("Excelente para piezas decorativas"); }
        if (wood.workability === "Fácil") { score += 2; reasons.push("Fácil de dar forma"); }
      } else if (project === "construccion") {
        if (wood.uses.some((u) => /construcci|puerta|suelo|estructura|marco/i.test(u))) { score += 3; reasons.push("Apta para construcción"); }
        if (wood.hardness >= 1000) { score += 2; reasons.push("Alta dureza estructural"); }
      }

      // Priority scoring
      const priority = answers.priority;
      if (priority === "durabilidad") {
        if (wood.durability === "Muy Alta") { score += 4; reasons.push("Durabilidad excepcional"); }
        else if (wood.durability === "Alta") { score += 3; reasons.push("Muy durable"); }
        else if (wood.durability === "Media") score += 1;
      } else if (priority === "estetica") {
        if (["Nogal", "Cerezo", "Caoba"].includes(wood.name)) { score += 4; reasons.push("Belleza natural extraordinaria"); }
        else if (["Roble", "Teca"].includes(wood.name)) { score += 2; reasons.push("Veta atractiva"); }
      } else if (priority === "trabajabilidad") {
        if (wood.workability === "Fácil") { score += 4; reasons.push("Muy fácil de trabajar"); }
        else if (wood.workability === "Moderada") { score += 2; reasons.push("Trabajabilidad moderada"); }
      } else if (priority === "precio") {
        if (wood.type === "softwood") { score += 4; reasons.push("Excelente relación calidad-precio"); }
        else if (["Haya", "Fresno"].includes(wood.name)) { score += 3; reasons.push("Precio accesible para madera dura"); }
      }

      // Experience scoring
      const experience = answers.experience;
      if (experience === "principiante") {
        if (wood.workability === "Fácil") { score += 3; reasons.push("Perfecta para principiantes"); }
        if (wood.workability === "Difícil") score -= 2;
      } else if (experience === "intermedio") {
        if (wood.workability === "Fácil" || wood.workability === "Moderada") { score += 2; reasons.push("Acorde a tu nivel"); }
      } else if (experience === "avanzado") {
        score += 1; // Avanzados pueden con todo
        if (wood.workability === "Moderada" || wood.workability === "Difícil") { reasons.push("Un reto gratificante para tu nivel"); }
      }

      // Color/finish scoring
      const finish = answers.finish;
      if (finish === "claro") {
        if (/blanco|crema|claro|amarillo|pálido/i.test(wood.color)) { score += 2; reasons.push("Tonalidad clara natural"); }
      } else if (finish === "medio") {
        if (/dorado|medio|cálido|marrón(?!.*oscuro)/i.test(wood.color)) { score += 2; reasons.push("Tonos cálidos intermedios"); }
      } else if (finish === "oscuro") {
        if (/oscuro|chocolate|rojo|rojizo|profundo/i.test(wood.color)) { score += 2; reasons.push("Tonos oscuros elegantes"); }
      }

      // Remove duplicate reasons
      const uniqueReasons = [...new Set(reasons)];
      return { wood, score, reasons: uniqueReasons };
    })
    .sort((a, b) => b.score - a.score);
}

/* ── Components ── */

const ProgressBar = ({ current, total }: { current: number; total: number }) => (
  <div className="w-full bg-muted rounded-full h-2 mb-8">
    <motion.div
      className="bg-primary h-2 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${((current + 1) / total) * 100}%` }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  </div>
);

const OptionButton = ({
  option,
  selected,
  onClick,
}: {
  option: QuizOption;
  selected: boolean;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
      selected
        ? "border-primary bg-primary/10 shadow-md"
        : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`p-2.5 rounded-lg ${selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
        {option.icon}
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground">{option.label}</h4>
        <p className="text-muted-foreground text-sm font-body mt-0.5">{option.description}</p>
      </div>
    </div>
  </motion.button>
);

const ResultCard = ({
  wood,
  score,
  reasons,
  rank,
}: {
  wood: WoodSpecies;
  score: number;
  reasons: string[];
  rank: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: rank * 0.15 }}
    className={`rounded-xl p-6 border ${
      rank === 0 ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20" : "border-border bg-card"
    }`}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <span className="text-4xl">{wood.image}</span>
        <div>
          <div className="flex items-center gap-2">
            {rank === 0 && (
              <Badge className="bg-primary text-primary-foreground text-xs">
                ⭐ Mejor opción
              </Badge>
            )}
            {rank === 1 && <Badge variant="secondary" className="text-xs">2° recomendada</Badge>}
            {rank === 2 && <Badge variant="outline" className="text-xs">3° alternativa</Badge>}
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mt-1">{wood.name}</h3>
          <p className="text-muted-foreground text-sm italic font-body">{wood.scientificName}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-primary font-display">{score}</div>
        <div className="text-xs text-muted-foreground font-body">puntos</div>
      </div>
    </div>

    <p className="text-foreground/80 text-sm font-body leading-relaxed mb-4">{wood.description}</p>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      {[
        { icon: Ruler, label: "Dureza", value: `${wood.hardness} Janka` },
        { icon: Weight, label: "Densidad", value: `${wood.density} kg/m³` },
        { icon: Wrench, label: "Trabajabilidad", value: wood.workability },
        { icon: Shield, label: "Durabilidad", value: wood.durability },
      ].map((item) => (
        <div key={item.label} className="bg-muted rounded-lg p-3">
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body mb-0.5">
            <item.icon className="w-3 h-3" />
            {item.label}
          </div>
          <p className="font-body font-semibold text-foreground text-sm">{item.value}</p>
        </div>
      ))}
    </div>

    <div className="flex items-start gap-2">
      <MapPin className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
      <p className="text-sm text-muted-foreground font-body">{wood.origin}</p>
    </div>

    {reasons.length > 0 && (
      <div className="mt-4 pt-4 border-t border-border">
        <h4 className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2">
          ¿Por qué esta madera?
        </h4>
        <div className="flex flex-wrap gap-2">
          {reasons.map((reason, i) => (
            <span key={i} className="text-xs font-body bg-primary/10 text-primary px-2.5 py-1 rounded-full">
              {reason}
            </span>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

/* ── Main Component ── */
const WoodQuiz = () => {
  const [step, setStep] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = step >= 0 ? questions[step] : null;
  const isAnswered = currentQuestion ? !!answers[currentQuestion.id] : false;

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(-1);
    }
  };

  const handleReset = () => {
    setStep(-1);
    setAnswers({});
    setShowResults(false);
  };

  const results = showResults ? scoreWoods(answers).slice(0, 3) : [];

  return (
    <section id="quiz" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase font-semibold">
            Recomendador
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            ¿Qué madera necesitas?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Responde 4 preguntas rápidas y descubre la madera perfecta para tu proyecto.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* ── Intro ── */}
          {step === -1 && !showResults && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center shadow-sm"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Encuentra tu madera ideal
              </h3>
              <p className="text-muted-foreground font-body max-w-md mx-auto mb-8 leading-relaxed">
                En solo 4 preguntas analizaremos tu proyecto, prioridades, experiencia y preferencias
                estéticas para recomendarte las mejores opciones de nuestro catálogo.
              </p>
              <motion.button
                onClick={() => setStep(0)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                Comenzar Quiz
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}

          {/* ── Questions ── */}
          {step >= 0 && !showResults && currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm"
            >
              <ProgressBar current={step} total={questions.length} />

              <div className="mb-8">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-2">
                  Pregunta {step + 1} de {questions.length}
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {currentQuestion.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {currentQuestion.subtitle}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option) => (
                  <OptionButton
                    key={option.value}
                    option={option}
                    selected={answers[currentQuestion.id] === option.value}
                    onClick={() => handleSelect(currentQuestion.id, option.value)}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Atrás
                </button>
                <motion.button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  whileHover={isAnswered ? { scale: 1.03 } : {}}
                  whileTap={isAnswered ? { scale: 0.97 } : {}}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold transition-all ${
                    isAnswered
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {step === questions.length - 1 ? "Ver resultados" : "Siguiente"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ── Results ── */}
          {showResults && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <Sparkles className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  ¡Tu madera ideal!
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  Basado en tus respuestas, estas son nuestras recomendaciones
                </p>
              </div>

              <div className="space-y-5">
                {results.map((result, i) => (
                  <ResultCard
                    key={result.wood.id}
                    wood={result.wood}
                    score={result.score}
                    reasons={result.reasons}
                    rank={i}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground hover:bg-muted font-body font-semibold transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Repetir quiz
                </button>
                <a
                  href="#maderas"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold transition-colors"
                >
                  Ver catálogo completo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WoodQuiz;
