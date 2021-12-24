import {SectionContainer} from "../Comp/SectionContainer";
import {DrawingHeader} from "../Comp/Drawings";
import Image from "next/image";
import Funskul from "../../assets/images/Projects/Image1.png";
import BlogSpot from "../../assets/images/Projects/Image2.png";
import DiseaseSymptom from "../../assets/images/Projects/Image4.png";
import TechMountain from "../../assets/images/Projects/Image5.png";
import Referral from "../../assets/images/Projects/Image7.png";
import SCP from "../../assets/images/Projects/Image8.png";
import Invasso from "../../assets/images/Projects/Image9.png";
import classNames from "classnames";

const ProjectList = [
    {
        "name": "BlogSpot",
        "className": "bg-gray-200 dark:bg-gray-800 md:row-span-2 md:col-span-4",
        "image": BlogSpot
    },
    {
        "name": "Funskul",
        "className": "bg-blue-600 md:col-span-4",
        "image": Funskul
    },
    {
        "name": "Tech Mountain",
        "className": "bg-green-400 md:col-span-2",
        "image": TechMountain
    },
    {
        "name": "Referral",
        "className": "bg-gray-200 md:col-span-2",
        "image": Referral
    },
    {
        "name": "Disease Symptom",
        "className": "bg-gray-200 dark:bg-gray-800 md:col-span-2 ",
        "image": DiseaseSymptom
    },
    {
        "name": "Invasso",
        "className": "bg-gray-200 dark:bg-gray-800 md:col-span-2 ",
        "image": Invasso
    },
    {
        "name": "SCP",
        "className": "bg-gray-200 dark:bg-gray-800 md:col-span-4",
        "image": SCP
    },

]

export const Projects = () => {
    return(
        <SectionContainer className={"max-w-full mt-0"}>
            <DrawingHeader header={"Projects"} text={"My completed personal and client projects"}/>
            <div className={"mt-12 grid md:grid-cols-8 md:grid-flow-row gap-5 container mx-auto"}>

                {
                    ProjectList.map((project, key) =>
                        <div className={classNames("grid place-items-center relative ", project.className)}>
                            <div className={"w-11/12 overflow-hidden text-center grid place-items-center"}>
                                <Image src={project.image}/>
                            </div>

                            <div className={"absolute h-full w-full z-50 top-0 left-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition transition-all duration-200 grid place-items-center group"}>
                                <div className={"text-center invisible group-hover:visible"}>
                                    <a href="" className={"no-underline text-xl text-gray-200 border-primaryLight border-b px-4 py-2"}>Visit Website</a>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </SectionContainer>
    )
}