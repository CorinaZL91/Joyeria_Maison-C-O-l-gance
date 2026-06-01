export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Inicio", href: "/inicio" },
  { name: "Ultima Colección", href: "/ultima-coleccion" },
  { name: "Anillos", href: "/anillos" },
  { name: "Aretes", href: "/aretes" },
  { name: "Collares", href: "/collares" },
  { name: "Pulseras", href: "/pulseras" },
];
