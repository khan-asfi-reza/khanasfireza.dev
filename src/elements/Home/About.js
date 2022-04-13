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
        <SectionContainer id={ABOUT_ID} className={"md:max-w-full m-auto py-10 container mx-auto relative"}>
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
            <div id={"about_stats"} className={"mt-40 flex md:flex-row flex-col justify-between container mx-auto gap-10"}>
                <div className={"flex flex-col justify-center"}>
                    <h3 id={"line_text"} className={"text-5xl font-bold md:text-left text-center"}>My Stats</h3>
                    <div className={"display-none md:block hidden mt-16 text-7xl font-extralight"}>
                        <FaArrowRight/>
                    </div>
                    <div className={"md:hidden flex flex-col mt-3"}>
                        <div className={"w-1 h-10 bg-[#505153] mx-auto"}/>
                        <hr className={"w-11/12 h-1 mx-auto border border-dashed border-[#505153] bg-[#505153]"}/>
                    </div>
                </div>
                <div  className={"grid grid-cols-3 flex-1 md:gap-0 sm:gap-10 gap-2"}>
                    {
                        StatData.map((data, key) => (
                            <motion.div {...moveFromBottom(key * 0.35)} key={key}
                                 className={"xl:w-9/12 lg:w-10/12 md:w-11/12 w-full text-center mx-auto p-5 border-gray-200 border dark:bg-theme-dark-100 bg-theme-light-50 flex flex-col justify-items-center items-center rounded-xl"}>
                                <div className={classnames("lg:text-6xl md:text-5xl text-3xl", data.color)}>
                                    {data.logo}
                                </div>
                                <h3 className={"dark:text-typo-dark-100 text-typo-light-300 lg:text-2xl md:text-2xl sm:text-xl text-sm md:mt-6 mt-3"}>{data.name}</h3>
                                <div className={"flex md:mt-6 mt-3"}>
                                    <h3 className={classNames("lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold", data.color)}>{data.number}+</h3>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </SectionContainer>
    )
}