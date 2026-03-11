export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  details: string[];
}

export const projects: Project[] = [
  {
    id: "minimal-identity",
    title: "Minimal Identity",
    category: "Branding",
    year: "2024",
    description: "A comprehensive brand identity system for a modern architecture firm, focusing on geometric precision and structural clarity.",
    image: "https://picsum.photos/seed/arch/1200/800",
    details: ["Logo Design", "Typography", "Color Palette", "Brand Guidelines"]
  },
  {
    id: "editorial-flow",
    title: "Editorial Flow",
    category: "Print Design",
    year: "2023",
    description: "A quarterly magazine layout that explores the intersection of digital culture and traditional craftsmanship.",
    image: "https://picsum.photos/seed/mag/1200/800",
    details: ["Layout Design", "Grid Systems", "Typography", "Print Production"]
  },
  {
    id: "digital-canvas",
    title: "Digital Canvas",
    category: "UI/UX Design",
    year: "2024",
    description: "A minimalist interface for a creative drawing application, prioritizing focus and intuitive tool access.",
    image: "https://picsum.photos/seed/ui/1200/800",
    details: ["Interface Design", "User Experience", "Prototyping", "Design Systems"]
  },
  {
    id: "monolith-packaging",
    title: "Monolith Packaging",
    category: "Packaging",
    year: "2023",
    description: "Sustainable packaging design for a premium skincare line, utilizing recycled materials and debossed textures.",
    image: "https://picsum.photos/seed/pack/1200/800",
    details: ["Structural Design", "Material Selection", "Production Management"]
  },
  {
    id: "spatial-exhibition",
    title: "Spatial Exhibition",
    category: "Exhibition",
    year: "2024",
    description: "Environmental graphics and wayfinding for a contemporary art exhibition in a repurposed industrial space.",
    image: "https://picsum.photos/seed/exhibit/1200/800",
    details: ["Environmental Graphics", "Wayfinding", "Large Format Print"]
  },
  {
    id: "type-study",
    title: "Type Study",
    category: "Typography",
    year: "2023",
    description: "An experimental typeface exploration focusing on the balance between negative space and stroke weight.",
    image: "https://picsum.photos/seed/type/1200/800",
    details: ["Type Design", "Specimen Design", "Experimental Media"]
  }
];
