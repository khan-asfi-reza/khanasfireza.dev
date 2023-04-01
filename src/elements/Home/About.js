import {SectionContainer} from "../../components/SectionContainer";
import {AboutPageText, SkillContentList} from "../../assets/data/Content";
import {SectionHeader} from "../../components/SectionHeader";
import {ABOUT_ID} from "../../assets/data/ContentID";
import classnames from "classnames";
import classNames from "classnames";
import {FaArrowRight, FaBriefcase, FaLaptopCode, FaUserAlt} from "react-icons/fa";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {moveFromBottom, moveFromLeft} from "../../const";
import {motion} from "framer-motion";

const StatData = [
    {
        name: "Clients",
        number: 10,
        logo: <FaUserAlt/>,
        color: "dark:text-green-400 text-green-500"
    },
    {
        name: "Projects",
        number: 20,
        logo: <FaLaptopCode/>,
        color: "dark:text-red-400 text-red-500"
    },
    {
        name: "Companies",
        number: 3,
        logo: <FaBriefcase/>,
        color: "dark:text-purple-400 text-purple-500"
    }
]


export const About = () => {

    return (
        <SectionContainer id={ABOUT_ID} className={"m-auto py-10 container mx-auto relative"}>
            <div className={"grid mt-10 grid md:grid-cols-5 grid-cols-1 md:gap-32 gap-y-10 xl:px-32 gap-y-10 z-10"}>
                <div className={"md:order-1 order-2 md:transform col-span-2 md:rotate-12"}>
                    <div className={"grid md:grid-cols-2 sm:grid-cols-3 justify-content-center grid-cols-3 md:gap-8 sm:gap-12 gap-4"}>
                        {
                            SkillContentList.map((elem, key) => (
                                <motion.div {...moveFromLeft(0.3 * key)} key={key}
                                    className={"aspect-square md:p-0 sm:p-4 p-2 py-4 rounded-xl dark:bg-theme-dark-100 bg-theme-light-50 grid place-items-center"}>
                                    <div className={"text-center"}>
                                        <div className={"2xl:w-16 2xl:h-16 lg:h-16 lg:w-16 md:w-12 md:h-12 sm:w-16 sm:h-16 w-10 h-10 overflow-hidden mx-auto"}>
                                            <img className={"h-full object-cover object-center"} alt={elem.name} src={elem.logo.src}/>
                                        </div>
                                        <p className={"mt-2 md:text-lg dark:text-typo-dark-100 text-typo-light-400 text-sm"}>{elem.name}</p>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>


                <div className={"md:order-2 order-1 grid place-items-center col-span-3"}>
                    <div className={"lg:px-16 md:px-14"}>
                        <hr id={"about_hr"} className={classnames("w-32 mt-3 text-primary bg-primary h-2 rounded-xl")}/>
                        <SectionHeader id={"about_heading"} header={"About Me"} headerClassName={"text-left mt-8 text-primary"}/>
                        <p id={"about_text"} className={"text-typo-light-300 text-lg dark:text-typo-dark-100 md:text-left  md:mt-32 mt-16"}>
                            {AboutPageText}
                        </p>
                    </div>
                </div>
            </div>
            
        </SectionContainer>
    )
}