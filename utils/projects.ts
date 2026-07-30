import { propsProjects } from "@/components/card-project";

export const projectsTrad : Record<"es" | "en", propsProjects[]> = { 
es: [
    {
      data:{
    img: "heladeria.png",
    title: "Heladería Chilly Willy",
    type: "Front-End y Back-End",
    text: "Chilly Willy es una aplicación web para la gestión de una heladería, con roles de administrador, cliente y vendedor. Permite visualizar ventas, inventarios y productos en tiempo real. El backend fue desarrollado utilizando Supabase, facilitando la autenticación, base de datos y gestión de la información.",
    classN: ["React", "CSS", "TypeScript", "Supabase"],
    view: "https://heladeria-chilly-willy.vercel.app/",
    front: "https://github.com/cristian10cm/heladeria-ChillyWilly",}
  },
  {
    data:{img: "vecii.png",
    title: "Vecii App",
    type: "Front-End",
    text: "Vecii App es una plataforma diseñada para la gestión integral de conjuntos residenciales. Cuenta con roles como administrador, guarda de seguridad y residente. En este proyecto estuve a cargo del desarrollo completo de la interfaz de usuario (UI), así como de la integración de WebSockets y APIs. Se implementaron patrones de diseño, arquitecturas escalables, dashboards interactivos y un diseño visual enfocado en la usabilidad.",
    classN: ["Next.js", "Tailwind", "TypeScript"],}
  },
  {
   data:{ img: "pets-project.png",
    title: "Social Pets",
    type: "Front-End y Back-End",
    text: "Social Pets es una aplicación web donde los usuarios pueden crear perfiles para sus mascotas, publicar contenido, comentar y dar likes. Incluye autenticación con JWT y una API REST desarrollada en NestJS. El frontend está construido con Next.js y Tailwind CSS, usando Prisma ORM, Docker y TypeScript.",
    classN: ["NestJS", "Docker", "Prisma", "Next.js", "Tailwind", "TypeScript"],
    front: "https://github.com/cristian10cm/App_Mascotas",
    back: "https://github.com/cristian10cm/nest_demo_mascotas",}
  },
  {
    data:{img: "barber-style.png",
    title: "Barber Style App",
    type: "Front-End y Back-End",
    text: "Barber Style App es una aplicación nativa que gestiona el sistema de servicios y reservación de citas para barberías y salones de belleza en Bogotá. Fue desarrollada con Kotlin y Jetpack Compose utilizando Supabase como backend.",
    classN: ["Kotlin", "Supabase"],
    front: "https://github.com/cristian10cm/App_nativa_barberStyle/tree/main",}
  },
  {
    data:{img: "tech-shop.png",
    title: "Technology Store Bogotá",
    type: "Front-End y Back-End",
    text: "Aplicación web desarrollada con NestJS y Next.js que permite a los usuarios registrarse, iniciar sesión y publicar productos tecnológicos. Implementa una API REST con Arquitectura Hexagonal, autenticación JWT, Prisma ORM, PostgreSQL y Docker para un desarrollo escalable y mantenible.",
    classN: ["NestJS", "Docker", "Prisma", "Next.js", "Tailwind", "REST API"],
    front: "https://github.com/AndresFonseca13/Proyecto_Backend_UCompensar",
    back: "https://github.com/cristian10cm/Backend_app_tec",}
  },
  {
    data:{img: "poke-app.png",
    title: "Poke App",
    type: "Front-End",
    text: "Poke App es una aplicación híbrida donde puedes explorar todos los Pokémon, agregarlos a favoritos y crear nuevos Pokémon. Utiliza la PokéAPI para obtener la información y fue desarrollada con Expo y React Native.",
    classN: ["React Native", "TypeScript"],
    front: "https://github.com/cristian10cm/app_galerry_pokemon",}
  },
  {
    data:{img: "spring-project.png",
    title: "API de Medicamentos",
    type: "Back-End",
    text: "API REST para la gestión de medicamentos desarrollada con Spring Boot. Implementa autenticación JWT, Spring Security, Spring Data JPA, PostgreSQL, Docker y validación mediante DTOs, ofreciendo una arquitectura robusta y escalable para operaciones CRUD seguras.",
    classN: ["Spring Boot", "JPA Hibernate", "Docker", "PostgreSQL", "REST API"],
    back: "https://github.com/cristian10cm/Firts_Api_springBoot",}
  },
  {
    data:{img: "shenlong.png",
    title: "Shenlong Adivina",
    type: "Front-End",
    text: "Shenlong Adivina es una aplicación inspirada en el juego 'Pedro Responde', con temática de Dragon Ball. Permite responder cualquier pregunta y hacer bromas a tus amigos. Incluye un truco especial que permite escribir la respuesta mientras aparentas escribir la petición.",
    classN: ["React", "CSS", "JavaScript"],
    view: "https://cristian10cm.github.io/Shenlong-page/",
    front: "https://github.com/cristian10cm/Shenlong-Adivina",}
  },
  {
    data:{img: "tupeli.png",
    title: "Tu Peli",
    type: "Front-End",
    text: "Tu Peli es una plataforma inspirada en servicios de streaming como Netflix y HBO. Utiliza la API de Jikan para obtener información y mostrar el contenido multimedia de forma organizada e intuitiva.",
    classN: ["Next.js", "CSS", "TypeScript"],
    view: "https://heladeria-chilly-willy-zq1u.vercel.app/",
    front: "https://github.com/cristian10cm/tuPeli.com",}
  },
  {
   data:{ img: "calculo.png",
    title: "Calculadora de Costos Totales y Utilidades",
    type: "Front-End",
    text: "Proyecto enfocado en el cálculo de costos y utilidades empresariales mediante cálculo integral. Incluye una interfaz intuitiva y dashboards interactivos que facilitan el análisis financiero.",
    classN: ["Next.js", "Tailwind", "TypeScript"],
    view: "https://calculo-integral-beige.vercel.app/",
    front: "https://github.com/cristian10cm/calculo-integral",}
  },
]
,
en:  [
    {
      data:{img: "heladeria.png",
      title: "Chilly Willy Ice Cream Shop",
      type: "Front-End & Back-End",
      text: "Chilly Willy is a web application for managing an ice cream shop with administrator, customer, and cashier roles. It provides real-time sales, inventory, and product management. The backend was built with Supabase, handling authentication, database management, and data storage.",
      classN: ["React", "CSS", "TypeScript", "Supabase"],
      view: "https://heladeria-chilly-willy.vercel.app/",
      front: "https://github.com/cristian10cm/heladeria-ChillyWilly",}
    },
    {
      data:{img: "vecii.png",
      title: "Vecii App",
      type: "Front-End",
      text: "Vecii App is a platform for comprehensive residential community management. It includes administrator, security guard, and resident roles. I was responsible for the complete user interface, WebSocket integration, REST APIs, scalable architecture, design patterns, and interactive dashboards.",
      classN: ["Next.js", "Tailwind", "TypeScript"],}
    },
    {
     data:{ img: "pets-project.png",
      title: "Social Pets",
      type: "Front-End & Back-End",
      text: "Social Pets is a web application where users can create pet profiles, publish posts, comment, and like content. It features JWT authentication and a REST API built with NestJS. The frontend was developed with Next.js, Tailwind CSS, Prisma ORM, Docker, and TypeScript.",
      classN: ["NestJS", "Docker", "Prisma", "Next.js", "Tailwind", "TypeScript"],
      front: "https://github.com/cristian10cm/App_Mascotas",
      back: "https://github.com/cristian10cm/nest_demo_mascotas",}
    },
    {
      data:{img: "barber-style.png",
      title: "Barber Style App",
      type: "Front-End & Back-End",
      text: "Barber Style App is a native Android application for managing appointments and services for barbershops and beauty salons in Bogotá. It was developed with Kotlin and Jetpack Compose using Supabase as the backend.",
      classN: ["Kotlin", "Supabase"],
      front: "https://github.com/cristian10cm/App_nativa_barberStyle/tree/main",}
    },
    {
      data:{img: "tech-shop.png",
      title: "Technology Store Bogotá",
      type: "Front-End & Back-End",
      text: "A web application built with NestJS and Next.js that allows users to register, log in, and publish technology products. It implements a REST API with Hexagonal Architecture, JWT authentication, Prisma ORM, PostgreSQL, and Docker.",
      classN: ["NestJS", "Docker", "Prisma", "Next.js", "Tailwind", "REST API"],
      front: "https://github.com/AndresFonseca13/Proyecto_Backend_UCompensar",
      back: "https://github.com/cristian10cm/Backend_app_tec",}
    },
    {
      data:{img: "poke-app.png",
      title: "Poke App",
      type: "Front-End",
      text: "Poke App is a hybrid application where users can browse every Pokémon, save favorites, and create new Pokémon. It uses the PokéAPI and was developed with Expo and React Native.",
      classN: ["React Native", "TypeScript"],
      front: "https://github.com/cristian10cm/app_galerry_pokemon",}
    },
    {
      data:{img: "spring-project.png",
      title: "Medicine Management API",
      type: "Back-End",
      text: "A REST API for medicine management built with Spring Boot. It implements JWT authentication, Spring Security, Spring Data JPA, PostgreSQL, Docker, and DTO validation, providing a secure and scalable CRUD architecture.",
      classN: ["Spring Boot", "JPA Hibernate", "Docker", "PostgreSQL", "REST API"],
      back: "https://github.com/cristian10cm/Firts_Api_springBoot",}
    },
    {
     data:{ img: "shenlong.png",
      title: "Shenlong Guess",
      type: "Front-End",
      text: "Shenlong Guess is a web application inspired by the game 'Pedro Responde' with a Dragon Ball theme. Users can answer any question and prank their friends using a hidden trick that lets them secretly type the answer.",
      classN: ["React", "CSS", "JavaScript"],
      view: "https://cristian10cm.github.io/Shenlong-page/",
      front: "https://github.com/cristian10cm/Shenlong-Adivina",}
    },
    {
      data:{img: "tupeli.png",
      title: "Your Movie",
      type: "Front-End",
      text: "Your Movie is a streaming platform inspired by Netflix and HBO. It consumes the Jikan API to display multimedia content in a clean and intuitive interface.",
      classN: ["Next.js", "CSS", "TypeScript"],
      view: "https://heladeria-chilly-willy-zq1u.vercel.app/",
      front: "https://github.com/cristian10cm/tuPeli.com",}
    },
    {
      data:{img: "calculo.png",
      title: "Business Cost & Profit Calculator",
      type: "Front-End",
      text: "A web application focused on calculating business costs and profits using integral calculus. It includes an intuitive interface and interactive dashboards for financial analysis.",
      classN: ["Next.js", "Tailwind", "TypeScript"],
      view: "https://calculo-integral-beige.vercel.app/",
      front: "https://github.com/cristian10cm/calculo-integral",}
    },
  ],
}
  
 

