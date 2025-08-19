type FlowerProps = {
  id: number
  name: string;
  img: string;
  price: number;
};

export type FlowerCategory = "casamientos" | "graduaciones" | "aniversarios" | "sanValentin" | "funebres";


export const bestFlowers = [
  {
    id: 1,
    name: 'Gerberas',
    price: 54000,
    description: 'Essto est una descriiption',
    image: '/img1.jpeg',
  },
  {
    id: 2,
    name: 'Tulipan',
    price: 36000,
    description: 'Essto est una descriiption',
    image: '/img2.jpeg',
  },
  {
    id: 3,
    name: 'Tulipan x6',
    price: 72000,
    description: 'Essto est una descriiption',
    image: '/img3.jpeg',
  },
  {
    id: 4,
    name: 'Girasol',
    price: 89000,
    description: 'Essto est una descriiption',
    image: '/img4.jpeg',
  },
  {
    id: 5,
    name: 'Lilium',
    price: 54000,
    description: 'Essto est una descriiption',
    image: '/img5.jpeg',
  },
  {
    id: 6,
    name: 'Lilium XL',
    price: 72000,
    description: 'Essto est una descriiption',
    image: '/img6.jpeg',
  },
  {
    id: 7,
    name: 'Rosas',
    price: 65000,
    description: 'Essto est una descriiption',
    image: '/img7.jpeg',
  }
]

export const categories = [
  { name: "Casamientos", id: "casamientos",},
  { name: "Graduaciones", id: "graduaciones",},
  { name: "Aniversarios", id: "aniversarios",},
  { name: "San Valentín", id: "sanValentin", },
  { name: "Funebres", id: "funebres", },
];

export const flowersByCategory: Record<FlowerCategory, FlowerProps[]> = {
  casamientos: [
    { id: 1, name: "Ramo Elegante", price: 60000, img: "/wedding1.jpeg" },
    { id: 2, name: "Blanco Puro", price: 60000, img: "/wedding2.jpeg" },
    { id: 3, name: "Amor Eterno", price: 60000, img: "/wedding3.jpeg" },
    { id: 4, name: "Sueño Floral", price: 60000, img: "/wedding4.jpeg" },
  ],
  graduaciones: [
    { id: 1, name: "Felicidad Floral", price: 60000, img: "/graduation1.jpeg" },
    { id: 2, name: "Éxito en Flor", price: 60000, img: "/graduation2.jpeg" },
    { id: 3, name: "Nuevo Comienzo", price: 60000, img: "/graduation3.jpeg" },
    { id: 4, name: "Color y Vida", price: 60000, img: "/graduation4.jpeg" },
  ],
  aniversarios: [
    { id: 1, name: "Romance Rojo", price: 60000, img: "/anniversary1.jpeg" },
    { id: 2, name: "Dulce Recuerdo", price: 60000, img: "/anniversary2.jpeg" },
    { id: 3, name: "Siempre Juntos", price: 60000, img: "/anniversary3.jpeg" },
    { id: 4, name: "Amor Profundo", price: 60000, img: "/anniversary4.jpeg" },
  ],
  sanValentin: [
    { id: 1, name: "Pasión Pétalo", price: 60000, img: "/anniversary1.jpeg" },
    { id: 2, name: "Rosa Eterna", price: 60000, img: "/valentine3.jpeg" },
  ],
  funebres: [
    { id: 1, name: "Cruz Funebre", price: 60000, img: "/funebre1.jpeg" },
    { id: 2, name: "Cruz Funebre", price: 60000, img: "/funebre2.jpeg" },
    { id: 3, name: "Cruz Funebre", price: 60000, img: "/funebre3.jpeg" },
    { id: 4, name: "Cruz Funebre", price: 60000, img: "/funebre4.jpeg" },
    { id: 5, name: "Cruz Funebre", price: 60000, img: "/funebre5.jpeg" },
    { id: 6, name: "Ambientacion", price: 60000, img: "/funebre6.jpeg" },
    { id: 7, name: "Corona Funebre", price: 60000, img: "/funebre7.jpeg" },
    { id: 8, name: "Corona Funebre", price: 60000, img: "/funebre8.jpeg" },
  ],
};
