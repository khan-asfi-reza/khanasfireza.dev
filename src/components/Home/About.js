import {SectionContainer} from "../Comp/SectionContainer";
import {AboutPageText, SkillContentList} from "../../assets/data/Content";
import {SectionHeader} from "../Comp/SectionHeader";
import {ABOUT_ID} from "../../assets/data/ContentID";
import classnames from "classnames";
import classNames from "classnames";
import Arrow from "../../assets/images/arrow.png";
import {FaBriefcase, FaLaptopCode, FaUserAlt} from "react-icons/fa";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";


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
    const ref = useRef(null);
    const stat_data = useRef(null);
    useEffect(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#"+ABOUT_ID,
            }
        });
        tl.from("#about_hr", {
            width: 0,
        })
        tl.from("#about_heading", {
            y: -100,
            opacity: 0,
        })
        tl.from("#about_text", {
            y: -100,
            opacity: 0,
        })
        for(let i = 0; i < ref.current.children.length; i++){
            tl.from(ref.current.children[i], {
                duration: 0.2,
                opacity: 0,
                x: -10,
            })
        }

        let sl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about_stats",
            }
        });
        sl.from(["#line", "#line_text"], {
            x: -100,
        })
        Array.from(stat_data.current.children).map((each) => {
            sl.from(each, {
                y: 100,
                opacity: 0,
            })
        })
    }, [])
    return (
        <SectionContainer id={ABOUT_ID} className={"md:max-w-full m-auto py-10 container mx-auto relative"}>
            <div className={"grid mt-10 grid md:grid-cols-5 grid-cols-1 md:gap-32 gap-y-10 xl:px-32 gap-y-10 z-10"}>
                <div className={"md:order-1 order-2 md:transform col-span-2 md:rotate-12"}>
                    <div ref={ref}
                        className={"grid md:grid-cols-2 sm:grid-cols-3 justify-content-center grid-cols-3 md:gap-10 sm:gap-12 gap-4"}>
                        {
                            SkillContentList.map((elem, key) => (
                                <div
                                    className={"aspect-square md:p-0 sm:p-4 p-2 py-4 rounded-xl dark:bg-theme-dark-100 bg-theme-light-50 grid place-items-center"}>
                                    <div className={"text-center"}>
                                        <div
                                            className={"md:w-12 md:h-20 sm:w-10 sm:h-10 w-8 h-8 overflow-hidden mx-auto"}>
                                            <img className={"w-full object-cover object-center"} alt={elem.name}
                                                 src={elem.logo.src}/>
                                        </div>
                                        <p className={"mt-2 md:text-lg dark:text-typo-dark-100 text-typo-light-400 text-sm"}>{elem.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className={"md:order-2 order-1 grid place-items-center col-span-3"}>
                    <div className={"lg:px-32 md:px-26"}>
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
                    <div className={"display-none md:block hidden"}>
                        <svg id="line"
                              xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 256.33 150" fill={"#4e4e4e"} >
                            <polygon points="234.17 111.61 212 98.81 212 119 12 119 12 0 0 0 0 119 0 125 0 130 212 130 212 150 234.17 137.2 256.33 124.4 234.17 111.61"
                                      />
                        </svg>
                    </div>
                    <div className={"md:hidden flex flex-col mt-3"}>
                        <div className={"w-1 h-10 bg-[#505153] mx-auto"}/>
                        <hr className={"w-11/12 h-1 mx-auto border border-dashed border-[#505153] bg-[#505153]"}/>
                    </div>
                </div>
                <div ref={stat_data} className={"grid grid-cols-3 flex-1 md:gap-0 sm:gap-10 gap-2"}>
                    {
                        StatData.map((data, key) => (
                            <div key={key}
                                 className={"xl:w-9/12 lg:w-10/12 md:w-11/12 w-full text-center mx-auto p-5 border-gray-200 border dark:bg-theme-dark-100 bg-theme-light-50 flex flex-col justify-items-center items-center rounded-xl"}>
                                <div className={classnames("lg:text-5xl md:text-4xl text-3xl", data.color)}>
                                    {data.logo}
                                </div>
                                <h3 className={"dark:text-typo-dark-100 text-typo-light-300 lg:text-3xl md:text-2xl sm:text-xl text-sm font-medium md:mt-6 mt-3"}>{data.name}</h3>
                                <div className={"flex md:mt-6 mt-3"}>
                                    <h3 className={classNames("lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold", data.color)}>{data.number}+</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </SectionContainer>
    )
}