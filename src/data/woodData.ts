export interface WoodSpecies {
  id: string;
  name: string;
  scientificName: string;
  type: "hardwood" | "softwood";
  origin: string;
  color: string;
  hardness: number; // Janka scale
  density: number; // kg/m³
  workability: "Fácil" | "Moderada" | "Difícil";
  durability: "Baja" | "Media" | "Alta" | "Muy Alta";
  uses: string[];
  description: string;
  image: string;
}

export interface Tool {
  id: string;
  name: string;
  category: "manual" | "electrica" | "medicion";
  description: string;
  icon: string;
}

export interface Technique {
  id: string;
  name: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  description: string;
  steps: string[];
}

export const woodSpecies: WoodSpecies[] = [
  {
    id: "roble",
    name: "Roble",
    scientificName: "Quercus robur",
    type: "hardwood",
    origin: "Europa, América del Norte",
    color: "Marrón dorado a marrón medio",
    hardness: 1290,
    density: 750,
    workability: "Moderada",
    durability: "Alta",
    uses: ["Muebles", "Suelos", "Barricas de vino", "Construcción naval"],
    description: "El roble es una de las maderas más valoradas en carpintería. Su veta prominente y su excepcional durabilidad lo convierten en la elección ideal para muebles de alta calidad y suelos que duran generaciones.",
    image: "🪵",
  },
  {
    id: "nogal",
    name: "Nogal",
    scientificName: "Juglans regia",
    type: "hardwood",
    origin: "Europa, Asia occidental",
    color: "Marrón chocolate oscuro",
    hardness: 1010,
    density: 640,
    workability: "Fácil",
    durability: "Media",
    uses: ["Muebles finos", "Ebanistería", "Culatas de armas", "Instrumentos musicales"],
    description: "El nogal destaca por su color profundo y rico, con tonos que van del chocolate al púrpura. Es la madera preferida para muebles de lujo y trabajos de ebanistería fina.",
    image: "🌰",
  },
  {
    id: "pino",
    name: "Pino",
    scientificName: "Pinus sylvestris",
    type: "softwood",
    origin: "Europa, Asia",
    color: "Amarillo claro a marrón rojizo",
    hardness: 690,
    density: 510,
    workability: "Fácil",
    durability: "Baja",
    uses: ["Construcción", "Carpintería general", "Marcos", "Puertas"],
    description: "El pino es la madera más utilizada en construcción por su versatilidad y precio accesible. Fácil de trabajar, acepta bien pinturas y barnices.",
    image: "🌲",
  },
  {
    id: "cerezo",
    name: "Cerezo",
    scientificName: "Prunus avium",
    type: "hardwood",
    origin: "Europa, América del Norte",
    color: "Rojizo cálido que oscurece con el tiempo",
    hardness: 950,
    density: 580,
    workability: "Fácil",
    durability: "Media",
    uses: ["Muebles", "Armarios", "Torneado", "Instrumentos"],
    description: "El cerezo es apreciado por su tono rojizo cálido que se profundiza con la exposición a la luz. Ofrece una superficie suave y satinada ideal para muebles elegantes.",
    image: "🍒",
  },
  {
    id: "caoba",
    name: "Caoba",
    scientificName: "Swietenia macrophylla",
    type: "hardwood",
    origin: "América Central y del Sur",
    color: "Rojo profundo a marrón rojizo",
    hardness: 800,
    density: 590,
    workability: "Fácil",
    durability: "Muy Alta",
    uses: ["Muebles de lujo", "Embarcaciones", "Instrumentos musicales", "Puertas"],
    description: "La caoba es sinónimo de lujo en la carpintería. Su grano recto, estabilidad dimensional y belleza natural la hacen incomparable para muebles de alta gama.",
    image: "🪵",
  },
  {
    id: "haya",
    name: "Haya",
    scientificName: "Fagus sylvatica",
    type: "hardwood",
    origin: "Europa",
    color: "Crema claro a rosado pálido",
    hardness: 1300,
    density: 720,
    workability: "Moderada",
    durability: "Baja",
    uses: ["Sillas", "Herramientas", "Juguetes", "Suelos"],
    description: "La haya es una madera dura con grano fino y uniforme. Es muy popular para la fabricación de sillas curvadas y utensilios de cocina por su superficie lisa.",
    image: "🌳",
  },
  {
    id: "teca",
    name: "Teca",
    scientificName: "Tectona grandis",
    type: "hardwood",
    origin: "Sudeste asiático",
    color: "Dorado a marrón medio",
    hardness: 1070,
    density: 630,
    workability: "Moderada",
    durability: "Muy Alta",
    uses: ["Mobiliario exterior", "Cubiertas de barco", "Suelos", "Jardín"],
    description: "La teca es famosa por sus aceites naturales que la hacen prácticamente inmune a la humedad y los insectos. Es la reina indiscutible del mobiliario de exterior.",
    image: "⚓",
  },
  {
    id: "fresno",
    name: "Fresno",
    scientificName: "Fraxinus excelsior",
    type: "hardwood",
    origin: "Europa, América del Norte",
    color: "Blanco cremoso a marrón claro",
    hardness: 1320,
    density: 680,
    workability: "Fácil",
    durability: "Baja",
    uses: ["Mangos de herramientas", "Deportes", "Muebles", "Suelos"],
    description: "El fresno es extraordinariamente flexible y resistente a los impactos, lo que lo hace perfecto para mangos de herramientas, bates y muebles que necesitan soportar uso intensivo.",
    image: "🏏",
  },
];

export const tools: Tool[] = [
  { id: "serrucho", name: "Serrucho", category: "manual", description: "Herramienta esencial para cortes rectos y curvos en madera.", icon: "🪚" },
  { id: "cepillo", name: "Cepillo de Carpintero", category: "manual", description: "Para alisar y nivelar superficies de madera con precisión.", icon: "🔨" },
  { id: "formones", name: "Formones", category: "manual", description: "Fundamentales para tallar, mortajar y crear uniones.", icon: "🔪" },
  { id: "martillo", name: "Martillo de Carpintero", category: "manual", description: "Imprescindible para clavar y extraer clavos con control.", icon: "🔨" },
  { id: "sierra-circular", name: "Sierra Circular", category: "electrica", description: "Cortes rectos rápidos y precisos en tableros y tablas.", icon: "⚙️" },
  { id: "lijadora", name: "Lijadora Orbital", category: "electrica", description: "Acabado suave y uniforme en grandes superficies.", icon: "💨" },
  { id: "taladro", name: "Taladro/Atornillador", category: "electrica", description: "Perforar y atornillar con velocidad y potencia controlada.", icon: "🔩" },
  { id: "fresadora", name: "Fresadora", category: "electrica", description: "Molduras, ranuras y perfiles decorativos con precisión.", icon: "🎯" },
  { id: "escuadra", name: "Escuadra", category: "medicion", description: "Ángulos perfectos de 90° para uniones y cortes precisos.", icon: "📐" },
  { id: "metro", name: "Flexómetro", category: "medicion", description: "Mediciones exactas, la base de todo buen proyecto.", icon: "📏" },
  { id: "nivel", name: "Nivel de Burbuja", category: "medicion", description: "Garantiza superficies perfectamente horizontales y verticales.", icon: "⚖️" },
  { id: "calibre", name: "Calibre", category: "medicion", description: "Mediciones de espesores y profundidades con alta precisión.", icon: "🔬" },
];

export const techniques: Technique[] = [
  {
    id: "ensamble-caja-espiga",
    name: "Ensamble de Caja y Espiga",
    difficulty: "Intermedio",
    description: "Una de las uniones más fuertes y elegantes en carpintería. Conecta dos piezas perpendiculares insertando una espiga en una mortaja.",
    steps: ["Marcar las dimensiones", "Cortar la espiga con serrucho", "Hacer la mortaja con formón", "Ajustar y encolar"],
  },
  {
    id: "cola-de-milano",
    name: "Cola de Milano",
    difficulty: "Avanzado",
    description: "La unión más admirada en ebanistería. Sus dientes trapezoidales crean una conexión mecánica que resiste la tracción sin necesidad de cola.",
    steps: ["Marcar los ángulos (1:6 para maderas duras)", "Cortar las colas con serrucho fino", "Transferir marcas a la pieza complementaria", "Cortar y ajustar los dientes"],
  },
  {
    id: "torneado",
    name: "Torneado en Madera",
    difficulty: "Intermedio",
    description: "Técnica para crear piezas cilíndricas y simétricas usando un torno. Ideal para patas de muebles, cuencos y objetos decorativos.",
    steps: ["Preparar la pieza en bruto", "Montar en el torno", "Desbastar con gubia de desbaste", "Dar forma con gubias de detalle", "Lijar en movimiento"],
  },
  {
    id: "tallado",
    name: "Tallado Artístico",
    difficulty: "Avanzado",
    description: "Arte de crear formas tridimensionales en madera usando gubias y formones. Desde relieves decorativos hasta esculturas completas.",
    steps: ["Elegir madera de grano fino (tilo, nogal)", "Dibujar el diseño en la pieza", "Desbastar la forma general", "Añadir detalles finos", "Lijar y aplicar acabado"],
  },
  {
    id: "acabado-aceite",
    name: "Acabado con Aceite Natural",
    difficulty: "Principiante",
    description: "Técnica de acabado que resalta la belleza natural de la madera, protegiéndola mientras permite que respire.",
    steps: ["Lijar progresivamente (120, 180, 220)", "Limpiar el polvo", "Aplicar aceite con trapo limpio", "Esperar 15 minutos y retirar exceso", "Repetir 2-3 capas"],
  },
  {
    id: "curvado-vapor",
    name: "Curvado al Vapor",
    difficulty: "Avanzado",
    description: "Técnica que utiliza vapor de agua para hacer flexible la madera y moldearla en curvas que serían imposibles de lograr de otra forma.",
    steps: ["Construir caja de vapor", "Vaporizar la madera 1h por pulgada de espesor", "Colocar rápidamente en el molde", "Fijar con sargentos", "Dejar secar 48-72 horas"],
  },
];

export const toolCategories = {
  manual: "Herramientas Manuales",
  electrica: "Herramientas Eléctricas",
  medicion: "Medición y Trazado",
};
