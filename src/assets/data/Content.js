import {useAge} from "../../hooks/useAge";
import {ObjectNextImage} from "../../components/Comp/Image";
import Circle from "../images/Circle.png";
import Square from "../images/Square.png";
import Arc from "../images/Arc.png";
import Triangle from "../images/Triangle.png";
import CSS from "../images/css.png";
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
        "element": <ObjectNextImage src={Square} className={HOME_PAGE_OBJECT_CLASSNAME + "lg:top-7 left-1/2 top-2 left-0 animation-delay-4"} />
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
        "position": " left-1/2 transform -translate-x-1/2 -translate-y-1/2 ",
        "text": "Front-end web development is the development of the graphical user interface of a website, " +
            "through the use of HTML, CSS, and JavaScript. I was introduced to frontend development at a very young age." +
            "Currently, developing front-end websites using various Javascript and CSS frameworks including, React, NextJS, Svelte, Angular, Vue, Tailwind Etc. " +
            "I am not only bound to design and develop UI but also specialized in " +
            "State Management, UI Flow and Creating Complex Functionality. I am currently focusing on UI Design, so that I can deliver a complete package"
    },
    {
        "icon": <FaCogs/>,
        "name": "Backend Development",
        "position": "left-0 transform translate-y-9 bottom-9",
        "text": "Backend development also known as server-side development, which primarily focuses on database, business logic, API etc, " +
            "I like backend development the most as I like to solve real life problems using programming, logics and algorithms. Mostly I develop" +
            "Backend Applications with Django, Flask, FastAPI and Express. Among these frameworks, I love to develop applications in Django, as it is one" +
            "of the most powerful frameworks available. With the help of DjangoRestFramework, Django Channels, Graphene, powerful and scalable applications can be developed"
    },
    {
        "icon": <FaLaptopCode/>,
        "name": "Full-Stack and Dev-ops",
        "position": "right-0 transform translate-y-9 bottom-9",
        "text": "Being expert in both, I can provide robust full-stack solutions which can scale well." +
            "Using Django, Django Rest Framework, Flask, FastAPI, powerful APIs can developed which later can be connected with any standalone frontend system that can be made with React, Svelte, Angular" +
            "Not only frontend but also, Android and IOS Application. I can be the jack of all trades, but master of both. After developing and testing an application successfully, the solution/product must be deployed in a " +
            "cloud system, where my devops skill comes in handy."
    },
]

export const FrontEndSkillContent = {
    logo: <FaCode/>,
    name: "Front-end",
    text: "Frontend development experience",
    skill_set: [
        {
            name: "CSS",
            logo: CSS,
            year: 2016
        },
        {
            name: "TypeScript",
            logo: TypeScript,
            year: 2017
        },
        {
            name: "React",
            logo: ReactLogo,
            year: 2018
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
            year: 2016
        },
        {
            name: "Django",
            logo: Django,
            year: 2017
        },
        {
            name: "PostGreSQL",
            logo: Psql,
            year: 2017
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

