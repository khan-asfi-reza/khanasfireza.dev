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
import {FaCode, FaCogs, FaLaptopCode, FaMobileAlt} from "react-icons/fa";

export const HomePageIntroName = "Khan Asfi Reza";
export const HomePageIntroTitle = "Full-Stack Developer";

export const HomePageIntroText = () => {
    const age = useAge();
    return (
        <>
            Experienced full-stack developer with
            <span className={"text-xl text-primary font-medium"}> {age}+ years</span> <br/>
            of experience of full-stack application development
        </>
    )
}

export const HOME_PAGE_OBJECT_CLASSNAME = "h-11 w-11 absolute animate-float animation-duration-6 "
export const HomePageObjects = [
    {
        "name": "Circle",
        "element": <ObjectNextImage src={Circle} className={HOME_PAGE_OBJECT_CLASSNAME + "lg:top-16 lg:left-16  animation-delay-3"} />
    },
    {
        "name": "Square",
        "element": <ObjectNextImage src={Square} className={HOME_PAGE_OBJECT_CLASSNAME + "lg:top-7 lg:left-1/2 top-64 left-0 animation-delay-4"} />
    },
    {
        "name": "Arc",
        "element": <ObjectNextImage src={Arc} className={HOME_PAGE_OBJECT_CLASSNAME + "lg:bottom-0 lg:left-1/3 right-0 top-12 animation-delay-5"} />
    },
    {
        "name": "Triangle",
        "element": <ObjectNextImage src={Triangle} className={HOME_PAGE_OBJECT_CLASSNAME + " lg:top-20 lg:right-0 bottom-5 animation-delay-6"}/>
    },
    {
        "name": "Box",
        "element": <ObjectNextImage src={Box} className={HOME_PAGE_OBJECT_CLASSNAME + "lg:bottom-24 lg:right-1/4 bottom-7 right-0"} />
    },
]

export const AboutPageText = "I am Khan Asfi Reza, an expert Full-Stack developer with 5+ Years of experience in full-stack software development along with DevOps. Started learning to code since the age 13, still learning and developing  web and desktop applications. I love to take challenges and focus on solving the problem with passion and efficiency."

export const AboutPageData = [
    {
        "number": 30,
        "suffix": "+",
        "text": "Projects",
    },
    {
        "number": 10,
        "suffix": "+",
        "text": "Clients",
    },
    {
        "number": 3,
        "suffix": "+",
        "text": "Companies",
    },
]
export const ExperienceContent = [
    {
        "icon": <FaMobileAlt/>,
        "name": "Frontend Development",
        "color": "dark:text-green-400 text-green-700",
        "text": "I develop front-end applications using various Javascript and CSS frameworks including, React, NextJS, Svelte, Angular, Vue, Tailwind Etc. "

    },
    {
        "icon": <FaCogs/>,
        "name": "Backend Development",
        "color": "dark:text-purple-400 text-purple-700",
        "text": "I focus mainly on the backend and develop applications using, django, flask, fastapi, django-rest-framework, node-js, graphene, java etc with postgresql database and mongodb"
    },
    {
        "icon": <FaLaptopCode/>,
        "name": "Full-Stack and Dev-ops",
        "color": "dark:text-red-400 text-red-700",
        "text": "Most of the time, I develop full-stack solutions using django, react, flask, vue etc with postgresql or mysql database. I have expertise in basic security and deployment as well"
    },
]



export const SkillContentList = [
        {
            name: "Python",
            logo: Python,
            year: 2017
        },
        {
            name: "TypeScript",
            logo: TypeScript,
            year: 2018
        },
        {
            name: "React",
            logo: ReactLogo,
            year: 2019
        },
        {
            name: "Django",
            logo: Django,
            year: 2019
        },
        {
            name: "FastAPI",
            logo: FastAPI,
            year: 2019
        },
        {
            name: "PostGreSQL",
            logo: Psql,
            year: 2018
        },
]

export const SkillShowCaseContents1 = [
    {
        name: "Python",
        logo: Python,
        year: 2017
    },
    {
        name: "TypeScript",
        logo: TypeScript,
        year: 2018
    },
    {
        name: "CSS",
        logo: CSS,
        year: 2017
    },
    {
        name: "Kotlin",
        logo: Kt,
        year: 2019
    },
    {
        name: "CPP",
        logo: CPP,
        year: 2017
    },
    {
        name: "Go",
        logo: Go,
        year: 2017
    },

]
export const SkillShowCaseContents2 = [
    {
        name: "Django",
        logo: Django,
        year: 2019
    },
    {
        name: "FastAPI",
        logo: FastAPI,
        year: 2019
    },
    {
        name: "PostGreSQL",
        logo: Psql,
        year: 2018
    },
    {
        name: "React",
        logo: ReactLogo,
        year: 2019
    },
    {
        name: "Redux",
        logo: ReduxLogo,
        year: 2019
    },
    {
        name: "Vue",
        logo: Vue,
        year: 2019
    },

]

export const AllSkillContents = [SkillShowCaseContents1, SkillShowCaseContents2]

export const FrontEndSkillContent = {
    logo: <FaCode/>,
    name: "Front-end",
    text: "Frontend development experience",
    skill_set: [
        {
            name: "CSS",
            logo: CSS,
            year: 2017
        },
        {
            name: "TypeScript",
            logo: TypeScript,
            year: 2018
        },
        {
            name: "React",
            logo: ReactLogo,
            year: 2019
        },
        {
            name: "Redux",
            logo: ReduxLogo,
            year: 2019
        },
        {
            name: "Vue",
            logo: Vue,
            year: 2019
        },
    ]
}

export const BackEndSkillContent = {
    logo: <FaCogs/>,
    name: "Back-end",
    text: "Backend development experience",
    skill_set: [
        {
            name: "Python",
            logo: Python,
            year: 2017
        },
        {
            name: "Django",
            logo: Django,
            year: 2018
        },
        {
            name: "PostGreSQL",
            logo: Psql,
            year: 2018
        },
        {
            name: "FastAPI",
            logo: FastAPI,
            year: 2019
        },
        {
            name: "Kotlin",
            logo: Kt,
            year: 2019
        },
    ]
}

export const SkillContent = [
    FrontEndSkillContent,
    BackEndSkillContent
]

export function getNumberOfYear(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year
}

export function getPercentage(number, n){
    return (number / n) * 100
}

