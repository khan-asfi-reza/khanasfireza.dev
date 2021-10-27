import {useAge} from "../../hooks/useAge";
import {ObjectNextImage} from "../../components/Image";
import Circle from "../images/Circle.png";
import Square from "../images/Square.png";
import Arc from "../images/Arc.png";
import Triangle from "../images/Triangle.png";
import Box from "../images/Box.png";

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

const HOME_PAGE_OBJECT_CLASSNAME = "h-11 w-11 absolute animate-float animation-duration-6 "
export const HomePageObjects = [
    {
        "name": "Circle",
        "element": <ObjectNextImage src={Circle} className={HOME_PAGE_OBJECT_CLASSNAME + "top-16 left-16 animation-delay-3"} />
    },
    {
        "name": "Square",
        "element": <ObjectNextImage src={Square} className={HOME_PAGE_OBJECT_CLASSNAME + "top-40 left-1/2 animation-delay-4"} />
    },
    {
        "name": "Arc",
        "element": <ObjectNextImage src={Arc} className={HOME_PAGE_OBJECT_CLASSNAME + "bottom-14 left-1/3 animation-delay-5"} />
    },
    {
        "name": "Triangle",
        "element": <ObjectNextImage src={Triangle} className={HOME_PAGE_OBJECT_CLASSNAME + "top-20 right-0 animation-delay-6"}/>
    },
    {
        "name": "Box",
        "element": <ObjectNextImage src={Box} className={HOME_PAGE_OBJECT_CLASSNAME + "bottom-24 right-1/4"} />
    },
]