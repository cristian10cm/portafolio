import { PropsLinks  } from "@/components/button-bar"
export  const links:Record<"es"|"en",PropsLinks[]>  = { 
    es:[{
        text: "Inicio",
        link:'#home'
    },
    {
        text: "Sobre mí",
        link:'#about-me'
    },{
        text: "Habilidades",
        link:'#skills'
    },{
        text: "Formación",
        link:'#study'
    },{
        text: "Proyectos",
        link:'#Projects'
    },{
        text: "Contacto",
        link:'mailto:cm2005cristian@gmail.com'
    }  ],

    en:[
        {
        text: "Home",
        link:'#home'
    },
    {
        text: "About me",
        link:'#about-me'
    },{
        text: "Skills",
        link:'#skills'
    },{
        text: "Study",
        link:'#study'
    },{
        text: "Projects",
        link:'#Projects'
    },{
        text: "Contact",
        link:'mailto:cm2005cristian@gmail.com'
    } 
    ] 
}

