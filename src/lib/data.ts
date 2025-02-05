export const navigation = {
  menuItems: [
    { label: "ACCUEIL", href: "/#" },
    { label: "RECHERCHE", href: "/#features" },
    { label: "NOS PROPRIÉTÉS", href: "/properties" },
    { label: "NOS SERVICES", href: "/#services" },
    { label: "QUI SOMMES-NOUS", href: "/#about" },
  ],
  contact: {
    label: "CONTACTEZ-NOUS",
    href: "/#contact",
  },
};

export const hero = {
  title: "FK IMMO&CONSTRUCTION",
  subtitle:
    "L'expertise FK immo&Construction Pour Des Biens D'exception Et Des Services Adaptés À Votre Portée.",
  cta: {
    label: "Découvrir",
    href: "#about",
  },
};

export const stats = [
  {
    value: "+300",
    label: "Biens vendus avec succès",
  },
  {
    value: "98%",
    label: "De satisfaction client",
  },
  {
    value: "+15",
    label: "Années d'expertise",
  },
];

export const services = [
  {
    title: "GESTION DES BIENS IMMOBILIERS",
    description:
      "FK IMMO & CONSTRUCTION prends en charge tous les aspects de la gestion de votre bien, de la recherche de locataires à l'entretien courant, en passant par la perception des loyers et la gestion des éventuels litiges. Notre objectif est de vous libérer des contraintes liées à la gestion immobilière et de maximiser votre rentabilité.",
    image: "/services/s3.webp",
    link: "#",
  },
  {
    title: "DÉCORATION D'INTÉRIEUR",
    description:
      "Votre intérieur est le reflet de votre personnalité, FK IMMO & CONSTRUCTION comprend l'importance de créer un espace qui vous ressemble, qui soit à la fois esthétique, fonctionnel et chaleureux. Ainsi nous mettons notre passion et notre expertise au service de votre projet. Que vous souhaitiez relooker une pièce, transformer votre intérieur dans son ensemble ou simplement ajouter une touche de décoration, nous vous accompagnons à chaque étape",
    image: "/services/s1.webp",
    link: "#",
  },
  {
    title: "LOTISSEMENT & DÉCAPAGE",
    description:
      "L'entreprise FK IMMO & CONSTRUCTION propose des services de lotissement et de décapage de terrain pour les particuliers, les entreprises et les promoteurs immobiliers. Nous disposons d'une équipe expérimentée et de l'équipement nécessaire pour réaliser ces travaux dans les règles de l'art et dans le respect des normes de sécurité et d'environnement.",
    image: "/properties/10eme.2.jpg",
    link: "#",
  },
  {
  title: "PRESTATION DE SERVICE",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut l",
    image: "/services/s4.webp",
    link: "#",
  },
];

export const propertiesUne = [
  {
    
    image: "/services/s1.webp",
    link: "#",
  },
  {
    image: "/services/s2.webp",
    link: "#",
  },
  {
    image: "/services/s3.webp",
    link: "#",
  },
  {
   image: "/services/s4.webp",
    link: "#",
  },
];

export const about = {
  title: "QUI SOMME NOUS ?",
  subtitle: "FK immo & construction",
  description:
    "We are a team of highly skilled professionals dedicated to providing exceptional real estate services. With years of experience in the industry, we understand the complexities of the real estate market and strive to deliver personalized solutions that meet our clients' unique needs.",
  image: "/about.webp",
  cta: {
    label: "DÉCOUVRIR",
    href: "#",
  },
};

export const expertise = {
  title: "UNE EXPERTISE DE CONFIANCE",
  description: [
    "Nous faisons bien plus que vendre des biens immobiliers : nous concrétisons vos rêves.",
    "Spécialisés dans l'immobilier de luxe, nous mettons notre expertise et notre passion au service de votre projet.",
    "De l'estimation précise de votre bien à la recherche de propriétés d'exception, chaque étape est gérée avec grand professionnalisme.",
    "Notre mission ? Vous offrir une expérience sur mesure et vous accompagner jusqu'à la réalisation de vos objectifs immobiliers.",
  ],
  features: [
    {
      icon: "/expertises/1.png",
      title: "ACCÈS À DES BIENS EXCLUSIFS",
    },
    {
      icon: "/expertises/2.png",
      title: "SERVICE PERSONNALISÉ",
    },
    {
      icon: "/expertises/3.png",
      title: "EXPERTISE LOCALE",
    },
    {
      icon: "/expertises/4.png",
      title: "TRANSPARENCE ET INTÉGRITÉ",
    },
  ],
  image: "/expertises/expertise.webp",
};

export const reviews = [
  {
    text: "Ergo Ego Senator Inimicus, Si Ita Vultis, Homini, Amicus Esse, Sicut Semper Fui, Rei Publicae Debeo: Quid? Si Ipsas Inimicitias, Depono Rei Publicae Causa, Quis Me Tandem Iure Reprehendet.",
    author: "MARIE PIERRE",
  },
  {
    text: "Si Ipsas Inimicitias, Depono Rei Publicae Causa, Quis Me Tandem Iure Reprehendet, Praesertim Cum Ego Omnium Meorum Consiliorum Atque Factis Mihi Censuerim Petenda.",
    author: "JOHN DOE",
  },
  {
    text: "Praesertim Cum Ego Omnium Meorum Consiliorum Atque Factorum Exempla Semper Ex Summorum Hominum Consiliis Atque Factis Mihi Censuerim Petenda.",
    author: "SARAH SMITH",
  },
];

export const contact = {
  title: "CONTACTEZ-NOUS",
  info: [
    {
      icon: "/contact/map.png",
      title: "LOCALISATION",
      details: "Angré Nouveau CHU en face de la librairie de France",
    },
    {
      icon: "/contact/phone.png",
      title: "TÉLÉPHONE",
      details: ["(+225) 27 22 36 18 30", "(+225) 05 86 90 82 87"],
    },
    {
      icon: "/contact/email.png",
      title: "EMAIL",
      details: "immo&construction@gmail.com",
    },
  ],
  form: {
    title: "Envoyer un message",
    fields: [
      { name: "firstName", label: "Nom", type: "text" },
      { name: "lastName", label: "Prénom", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Téléphone", type: "tel" },
      { name: "message", label: "Message", type: "textarea" },
    ],
    submitLabel: "Envoyer",
  },
};

export const footer = {
  categories: [
    {
      title: "Terrains en vente",
      links: [
        { label: "Abidjan", href: "#" },
        { label: "Yamoussoukro", href: "#" },
        { label: "Bouake", href: "#" },
        { label: "Daloa", href: "#" },
        { label: "Assinie", href: "#" }
      ],
    },
    {
      title: "Maison et appartement",
      links: [
        { label: "Duplex", href: "#" },
        { label: "Villa de luxe", href: "#" },
        { label: "Immeuble R+2", href: "#" },
        { label: "Design systems", href: "#" },
        { label: "Maisons bases", href: "#" }
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Best practices", href: "#" },
        { label: "Colors", href: "#" },
        { label: "Color wheel", href: "#" },
        { label: "Support", href: "#" },
        { label: "Developers", href: "#" },
        { label: "Resource library", href: "#" },
      ],
    },
  ],
  socials: [
    { icon: "/socials/x.png", href: "#" },
    { icon: "/socials/instagram.png", href: "#" },
    { icon: "/socials/youtube.png", href: "#" },
    { icon: "/socials/linkedin.png", href: "#" },
  ],
};
