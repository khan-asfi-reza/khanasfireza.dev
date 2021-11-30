import {SectionContainer} from "../Comp/SectionContainer";
import {DrawingHeader} from "../Comp/Drawings";
import {FaBars} from "react-icons/fa";

export const Projects = () => {
    return(
        <SectionContainer className={"max-w-full"}>
            <DrawingHeader header={"Projects"} text={"My completed personal and client projects"}/>
            <div className={"mt-12 grid grid-cols-6"}>

            </div>
        </SectionContainer>
    )
}