import {useAge} from "../../hooks/useAge";
import {ObjectNextImage} from "../../components/Image";
import Circle from "../images/Circle.png";
import Square from "../images/Square.png";
import Arc from "../images/Arc.png";
import Triangle from "../images/Triangle.png";
import CSS from "../images/css.png";
import Go from "../images/go.png";
import CPP from "../images/cpp.png";
import Kt from "../images/kt.png";
import Python from "../images/python.png";
import TypeScript from "../images/ts.png";
import ReactLogo from "../images/react.png";
import ReduxLogo from "../images/redux.png";
import Vue from "../images/vue.png";
import FastAPI from "../images/fastapi.png";
import Django from "../images/django.png";
import Psql from "../images/psql.png";
import Box from "../images/Box.png";
import Code from "../images/code.png";
import Agile from "../images/agile.png";
import WWW from "../images/world-wide-web.png";
import Gfx from "../images/graphic-design.png";
import {FaCode, FaCogs, FaLaptopCode, FaMobileAlt} from "react-icons/fa";

export const HomePageIntroName = "Khan Asfi Reza";
export const HomePageIntroTitle = "Back-End | Full-Stack Engineer ";

export const HomePageIntroText = () => {
    const age = useAge();
    return (<>
            Experienced full-stack developer with
            <span className={"text-xl text-primary font-medium"}> {age}+ years</span> <br/>
            of experience of full-stack application development
        </>)
}

export const HOME_PAGE_OBJECT_CLASSNAME = "h-11 w-11 absolute animate-float animation-duration-6 "
export const HomePageObjects = [{
    "name": "Circle",
    "element": <ObjectNextImage src={Circle}
                                className={HOME_PAGE_OBJECT_CLASSNAME + "lg:top-16 lg:left-16  animation-delay-3"}/>
}, {
    "name": "Square",
    "element": <ObjectNextImage src={Square}
                                className={HOME_PAGE_OBJECT_CLASSNAME + "lg:top-7 lg:left-1/2 top-64 left-0 animation-delay-4"}/>
}, {
    "name": "Arc",
    "element": <ObjectNextImage src={Arc}
                                className={HOME_PAGE_OBJECT_CLASSNAME + "lg:bottom-0 lg:left-1/3 right-0 top-12 animation-delay-5"}/>
}, {
    "name": "Triangle",
    "element": <ObjectNextImage src={Triangle}
                                className={HOME_PAGE_OBJECT_CLASSNAME + " lg:top-20 lg:right-0 bottom-5 animation-delay-6"}/>
}, {
    "name": "Box",
    "element": <ObjectNextImage src={Box}
                                className={HOME_PAGE_OBJECT_CLASSNAME + "lg:bottom-24 lg:right-1/4 bottom-7 right-0"}/>
},]

export const AboutPageText = "Hello there! I'm Khan Asfi Reza, a passionate Pythonista and lead backend engineer at Zelf Technologies. With a deep-rooted love for web technologies, I strive to deliver innovative, efficient, and robust solutions to complex problems. My curiosity for compilers and interpreters fuels my passion for software engineering, motivating me to explore new horizons and sharpen my skills each day."


export const ExperienceContent = [{
    "icon": Gfx,
    "name": "Frontend",
    "color": "text-green-600",
    "border": "bg-green-600",
    "text": "I develop front-end applications using various Javascript and CSS frameworks including, React, NextJS, Svelte, Angular, Vue, Tailwind Etc. "

}, {
    "icon": Code,
    "name": "Backend",
    "color": "text-purple-700",
    "border": "bg-purple-700",
    "text": "I love backend the most and develop applications using, django, flask, fastapi, node-js etc with postgresql database and mongodb"
}, {
    "icon": WWW,
    "name": "Full-Stack",
    "color": "text-red-700",
    "border": "bg-red-700",
    "text": "Most of the time, I develop full-stack solutions using django, react, flask, vue etc with postgresql or mysql database. "
},
{
    "icon": Agile,
    "name": "Dev-ops",
    "color": "text-yellow-700",
    "border": "bg-yellow-700",
    "text": "After learning both stacks, I have engaged myself in devops work as well, which includes deployment, CI CD, testing and many more"
},
]


export const SkillContentList = [{
    name: "Python", logo: Python, year: 2017
}, {
    name: "TypeScript", logo: TypeScript, year: 2018
}, {
    name: "React", logo: ReactLogo, year: 2019
}, {
    name: "Django", logo: Django, year: 2019
}, {
    name: "FastAPI", logo: FastAPI, year: 2019
}, {
    name: "PostGreSQL", logo: Psql, year: 2018
},]

export const SkillShowCaseContents1 = [{
    name: "Python", logo: Python, year: 2017
}, {
    name: "TypeScript", logo: TypeScript, year: 2018
}, {
    name: "CSS", logo: CSS, year: 2017
}, {
    name: "Kotlin", logo: Kt, year: 2019
}, {
    name: "CPP", logo: CPP, year: 2017
}, {
    name: "Go", logo: Go, year: 2017
},

]
export const SkillShowCaseContents2 = [{
    name: "Django", logo: Django, year: 2019
}, {
    name: "FastAPI", logo: FastAPI, year: 2019
}, {
    name: "PostGreSQL", logo: Psql, year: 2018
}, {
    name: "React", logo: ReactLogo, year: 2019
}, {
    name: "Redux", logo: ReduxLogo, year: 2019
}, {
    name: "Vue", logo: Vue, year: 2019
},

]

export const AllSkillContents = [SkillShowCaseContents1, SkillShowCaseContents2]


