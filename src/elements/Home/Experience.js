import classnames from "classnames";
import classNames from "classnames";
import {ExperienceContent} from "../../assets/data/Content";
import {motion} from "framer-motion";
import {moveFromLeft, moveFromTop} from "../../const";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";
import {SKILLS_ID} from "../../assets/data/ContentID";

const headerClassNameFunc = () => classnames("font-semibold md:text-6xl xs:text-5xl text-4xl text-primary relative",);


export function Experience() {


    return (
        <section id={"experience"} className={""}>
            <div className={"relative overflow-hidden "}>
                <div className={"grid lg:grid-cols-2 gap-10"}>
                    <motion.div {...moveFromLeft()} className={"sm:px-20 sm:py-20 px-4 py-20"}>
                        <h2 className={headerClassNameFunc()}>What I Do?
                            <span className={"overflow-hidden left-0 z-1 absolute md:text-9xl text-8xl dark:text-typo-light-100 text-typo-light-100 opacity-10 top-0"}>WHAT</span>
                        </h2>
                        <hr className={classnames("w-20 mt-3 md:mx-0 mx-auto text-primary bg-primary w-25 h-1")}/>
                        <p className={"mt-20 dark:text-typo-dark-100 text-typo-light-200 max-w-xl"}>
                            I have experience in web and
                            software development for a long time, and I have been working for several clients and companies
                            as a developer, besides that I have participated in various Programming and Web Dev contests and
                            was able to achieve something good in those contests</p>
                        <a href={"#"+SKILLS_ID} className={"w-48 text-emerald-500 border mt-20 py-4 px-4 border-emerald-500 flex items-center justify-between"}>
                            <span>
                                Learn More
                            </span>
                            <FaArrowRight/>
                        </a>
                    </motion.div>
                    <div className={"grid sm:grid-cols-2 sm:px-20 sm:py-20 px-4 py-20 lg:gap-12 gap-x-10 gap-y-14 bg-yellow-300"}>
                        {
                            ExperienceContent.map((elem, key) => (
                                <motion.div {...moveFromTop(key * 0.23)}
                                            id={`expCont${key}`} key={key}
                                            className={classNames("",)}>
                                    <div className={"h-16 w-16 relative"}>
                                        <Image src={elem.icon} alt={elem.name} layout={"fill"} objectFit={"contain"}/>
                                    </div>
                                    <h3 className={classnames("mt-3 text-xl font-bold", elem.color)}>{elem.name}</h3>
                                    <hr className={classnames("w-20 mt-1 h-1 border-none", elem.border)}/>
                                    <p className={"text-gray-900 mt-6 font-medium"}>{elem.text}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}