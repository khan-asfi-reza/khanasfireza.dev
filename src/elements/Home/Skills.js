import {SectionContainer} from "../../components/SectionContainer";
import {SectionHeader} from "../../components/SectionHeader";
import {SectionRow} from "../../components/SectionRow";
import {SKILLS_ID} from "../../assets/data/ContentID";
import {AllSkillContents} from "../../assets/data/Content";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import {moveFromLeft, moveFromTop} from "../../const";

const WorkingExperience = [
    {
        title: "Freelance Full-Stack Developer",
        workplace: "Fiverr",
        validity: "2018-"
    },
    {
        title: "Jr Full-Stack Developer",
        workplace: "Invasso LLC",
        validity: "2020-2021"
    },
    {
        title: "Full Stack Software Developer",
        workplace: "Shore Capital Corporation",
        validity: "2021-2022"
    },
    {
        title: "Freelance Full Stack Developer",
        workplace: "Upwork",
        validity: "2021-"
    },
]

export const Skills = () => {
    const [current, setCurrent] = useState(0);


    useEffect(() => {
        let timeOut = setTimeout(() => {
            if (current === 0) {
                setCurrent(1);
            } else {
                setCurrent(0);
            }
        }, 5000)
        return () => {
            clearTimeout(timeOut)
        }
    }, [current])

    return (
        <SectionContainer id={SKILLS_ID}>
            <SectionRow className={"gap-x-24 gap-y-20 mt-12"}>
                <div className={"flex flex-col justify-between"}>
                    <div id={"skill_text"}>
                        <SectionHeader header={"Skills and Experience"} headerClassName={"text-left text-primary"}/>
                        <motion.p {...moveFromLeft()} className={"mt-14 dark:text-typo-dark-100 text-typo-light-200"}>
                            I have professional experience in more than 10+ Languages and Frameworks along with
                            relational databases and many other
                            technical tools. I have worked with 3 Companies and several clients to provide services.
                        </motion.p>
                    </div>
                    <div id={"SKILL_CAROUSEL"} className={"mt-12"}>
                        <h2 className={"dark:text-typo-dark-400 text-typo-light-400 text-4xl font-semibold"}>Skills</h2>
                        <div className={"flex flex-row overflow-hidden"}>
                            <AnimatePresence exitBeforeEnter={true}>
                                {AllSkillContents.map((each, key) => (
                                    current === key &&
                                    <motion.div {...moveFromLeft()} exit={{x: 100, opacity: 0}}
                                                className={"w-full mx-auto flex-full"} key={key}>
                                        <div className={"grid grid-cols-3 md:gap-10 gap-3 gap-y-10 mt-12"}>
                                            {each.map((content, k) => (
                                                <div key={k} id={`skill_content_${key}`}
                                                     className={classNames("transition-all")}>
                                                    <div className={"md:h-20 h-16 relative"}>
                                                        <img className={"md:h-20 h-16 "} src={content.logo.src}
                                                             alt={content.name}/>
                                                    </div>
                                                    <p className={"text-base  dark:text-typo-dark-100 text-typo-light-200 mt-5"}>
                                                        {content.name}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className={"flex flex-col justify-between pt-20"}>
                    <h3 className={"dark:text-typo-dark-400 text-typo-light-400 text-4xl font-semibold"}>Experience</h3>
                    <div className={"mt-20"}>
                        {
                            WorkingExperience.map(
                                (each, k) => (
                                    <motion.div {...moveFromTop(k * 0.3)} key={k}
                                                className={"py-4 grid grid-cols-12 border-b border-0.5 dark:border-typo-light-300 border-typo-dark-300 mt-5"}>
                                        <p className={"md:col-span-3 col-span-4 dark:text-typo-dark-100 text-typo-light-100 mr-6"}>{each.validity}</p>
                                        <div className={"md:col-span-9 col-span-8 flex flex-col"}>
                                            <h2 className={"md:text-2xl text-xl font-medium dark:text-typo-dark-200 text-typo-light-200"}>{each.title}</h2>
                                            <p className={"mt-3 md:text-base text-sm dark:text-typo-dark-100 text-typo-light-100"}>{each.workplace}</p>
                                        </div>
                                    </motion.div>
                                )
                            )
                        }
                    </div>
                </div>
            </SectionRow>
        </SectionContainer>

    )
}