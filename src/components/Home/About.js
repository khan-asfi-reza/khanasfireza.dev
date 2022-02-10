import {SectionContainer} from "../Comp/SectionContainer";
import Image from "next/image";
import {AboutPageText, SkillContentList} from "../../assets/data/Content";
import {SectionHeader} from "../Comp/SectionHeader";
import {SectionRow} from "../Comp/SectionRow";
import {ABOUT_ID} from "../../assets/data/ContentID";
import classnames from "classnames";
import Arrow from "../../assets/images/arrow.png";
import {FaUserAlt, FaLaptopCode, FaBriefcase} from "react-icons/fa";


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
        color: "dark:text-pink-400 text-pink-500"
    },
    {
        name: "Companies",
        number: 3,
        logo: <FaBriefcase/>,
        color: "dark:text-purple-400 text-purple-500"
    }
]


export const About = () => {

    return(
        <SectionContainer id={ABOUT_ID} className={"md:max-w-full m-auto py-10  container mx-auto"}>
            <div className={"grid mt-10 grid md:grid-cols-5 grid-cols-1 md:gap-32 gap-y-10 xl:px-32 gap-y-10"}>
                <div className={"md:order-1 order-2 md:transform col-span-2 md:rotate-12"}>
                    <div className={"grid md:grid-cols-2 sm:grid-cols-3 justify-content-center xs:grid-cols-3 grid-cols-2 md:gap-10 sm:gap-12 gap-4"}>
                        {
                            SkillContentList.map((elem, key) => (
                                <div className={"aspect-square md:p-0 sm:p-4 p-2 py-4 rounded-xl dark:bg-theme-dark-100 bg-theme-light-50 grid place-items-center"}>
                                    <div className={"text-center"}>
                                        <div className={"md:w-12 md:h-20 w-10 h-10 overflow-hidden mx-auto"}>
                                            <img className={"w-full object-cover object-center"} alt={elem.name} src={elem.logo.src}/>
                                        </div>
                                        <p className={"mt-2 text-lg text-typo-dark-100"}>{elem.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={"md:order-2 order-1 grid place-items-center col-span-3"}>
                    <div className={"lg:px-32 md:px-26"}>
                        <hr className={classnames("w-32 mt-3 text-primary bg-primary h-2 rounded-xl")}/>
                        <SectionHeader header={"About Me"} headerClassName={"text-left mt-8 text-primary"}/>
                        <p className={"text-typo-light-300 dark:text-typo-dark-100 md:text-left  md:mt-32 mt-16"}>
                            {AboutPageText}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"mt-32 flex md:flex-row flex-col justify-between container mx-auto gap-10"}>
                <div className={"flex flex-col justify-center"}>
                    <h3 className={"text-5xl font-bold md:text-left text-center"}>My Stats</h3>
                    <div className={"display-none md:block hidden"}>
                        <img className={"h-32"} src={Arrow.src} alt=""/>
                    </div>
                    <div className={"md:hidden flex flex-col mt-3"}>
                        <div className={"w-1 h-10 bg-[#505153] mx-auto"}/>
                        <hr className={"w-11/12 h-1 mx-auto border border-dashed border-[#505153] bg-[#505153]"}/>
                    </div>
                </div>
                <div className={"grid grid-cols-3 flex-1 md:gap-0 sm:gap-10 gap-2"}>
                    {
                        StatData.map((data, key) => (
                            <div key={key} className={"xl:w-9/12 lg:w-10/12 md:w-11/12 w-full text-center mx-auto p-5 border-gray-200 border dark:bg-theme-dark-100 bg-theme-light-50 flex flex-col justify-items-center items-center rounded-xl"}>
                                <div className={classnames("lg:text-5xl md:text-4xl text-3xl", data.color)}>
                                    {data.logo}
                                </div>
                                <h3 className={"dark:text-typo-dark-100 text-typo-light-300 lg:text-3xl md:text-2xl sm:text-xl text-sm font-semibold md:mt-6 mt-3"}>{data.name}</h3>
                                <div className={"flex md:mt-6 mt-3"}>
                                    <h3 className={"dark:text-typo-dark-300 text-typo-light-300 lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold"}>{data.number}+</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </SectionContainer>
    )
}