import {ObjectNextImage} from "./Image";
import Triangle from "../../assets/images/Triangle.png";
import {HOME_PAGE_OBJECT_CLASSNAME} from "../../assets/data/Content";
import Circle from "../../assets/images/Circle.png";
import Square from "../../assets/images/Square.png";
import {SectionHeader} from "./SectionHeader";

export const Drawings = ({className}) => (
    <div className={className}>
        <ObjectNextImage src={Triangle} className={HOME_PAGE_OBJECT_CLASSNAME + "md:top-0 left-0 transform rotate-45 text-white"} />
        <ObjectNextImage src={Circle} className={HOME_PAGE_OBJECT_CLASSNAME + "md:top-1/2 -bottom-2/3 left-1/2 transform rotate-12 text-white"} />
        <ObjectNextImage src={Square} className={HOME_PAGE_OBJECT_CLASSNAME + "md:top-0 right-0 transform rotate-12 text-white"} />
    </div>
)

export const DrawingHeader = ({header, text}) => (
    <div className={"bg-primary py-12"}>
        <div
            className={"relative container mx-auto flex md:flex-row md:justify-around md:items-stretch flex-col items-center "}>
            <Drawings className={"relative md:visible invisible"}/>
            <SectionHeader header={header}
                           text={text}
                           headerClassName={"text-white"}

                           textClassName={"text-typo-dark-300"}/>
            <Drawings
                className={"md:relative md:w-auto md:h-auto overflow-visible w-full absolute h-full"}/>
        </div>
    </div>
)
