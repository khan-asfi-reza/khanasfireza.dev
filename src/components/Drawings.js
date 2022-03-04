import {ObjectNextImage} from "./Image";
import Triangle from "../assets/images/Triangle.png";
import {HOME_PAGE_OBJECT_CLASSNAME} from "../assets/data/Content";
import Circle from "../assets/images/Circle.png";
import Square from "../assets/images/Square.png";

export const Drawings = ({className}) => (
    <div className={className}>
        <ObjectNextImage alt={"Object Image"} src={Triangle}
                         className={HOME_PAGE_OBJECT_CLASSNAME + "md:top-0 left-0 transform rotate-45 text-white"}/>
        <ObjectNextImage alt={"Object Image"} src={Circle}
                         className={HOME_PAGE_OBJECT_CLASSNAME + "md:top-1/2 -bottom-2/3 left-1/2 transform rotate-12 text-white"}/>
        <ObjectNextImage alt={"Object Image"} src={Square}
                         className={HOME_PAGE_OBJECT_CLASSNAME + "md:top-0 right-0 transform rotate-12 text-white"}/>
    </div>
)
