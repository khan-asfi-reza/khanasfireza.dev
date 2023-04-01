import classnames from "classnames";
import classNames from "classnames";
import {ExperienceContent} from "../../assets/data/Content";
import {motion} from "framer-motion";
import {moveFromLeft, moveFromTop} from "../../const";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";
import {CONTACT_ID} from "../../assets/data/ContentID";

const headerClassNameFunc = () => classnames("font-semibold md:text-6xl xs:text-5xl text-4xl text-primary relative",);


export function Experience() {


    return (
        <section id={"experience"} className={"container mx-auto"}>
            <div className={"relative overflow-hidden "}>
                <div className={"grid lg:grid-cols-2 gap-10"}>
                    <motion.div {...moveFromLeft()} className={"sm:px-20 sm:py-20 px-4 py-20"}>
                        <h2 className={headerClassNameFunc()}>What I Do?
                            <span className={"overflow-hidden left-0 z-1 absolute md:text-9xl text-8xl dark:text-typo-light-100 text-typo-light-100 opacity-10 top-0"}>WHAT</span>
                        </h2>
                        <hr className={classnames("w-20 mt-3 md:mx-0 mx-auto text-primary bg-primary w-25 h-1")}/>
                        <p className={"mt-20 dark:text-typo-dark-100 text-typo-light-200 max-w-xl"}>
                        As a versatile software engineer, I excel in crafting powerful backend services that drive the heart of applications. While I'm no stranger to frontend development, my true passion lies in architecting the intricate systems that operate behind the scenes. My experience extends across an array of languages and frameworks, allowing me to adapt and deliver exceptional results on a diverse range of projects.
With a repertoire of over five programming languages under my belt, I've navigated the technological landscape, harnessing the power of various frameworks to build dynamic and impactful solutions. Embracing the DevOps philosophy, I seamlessly integrate development and operations to ensure a streamlined, efficient process from start to finish.
Join me as I continue to explore the ever-evolving world of technology, pushing the boundaries of what's possible and creating the extraordinary.
                        </p>
                        <a href={"#"+CONTACT_ID} className={"w-48 text-emerald-500 border mt-20 py-4 px-4 border-emerald-500 flex items-center justify-between"}>
                            <span>
                                Let's Connect
                            </span>
                            <FaArrowRight/>
                        </a>
                    </motion.div>
                    <div className={"grid sm:grid-cols-2 sm:px-20 sm:py-20 px-4 py-20 lg:gap-12 gap-x-10 gap-y-14 bg-lightYellow"}>
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