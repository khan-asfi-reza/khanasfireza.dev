import {SectionContainer} from "../../components/SectionContainer";
import {SectionHeader} from "../../components/SectionHeader";
import {ABOUT_ID} from "../../assets/data/ContentID";
import classnames from "classnames";
import {moveFromLeft} from "../../const";
import {AllSkillContents} from "../../assets/data/Content";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import classNames from "classnames";
import { SectionRow } from "../../components/SectionRow";
export default function BlogHero(){
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
        <SectionContainer id={ABOUT_ID} className={"m-auto py-10 container mx-auto relative"}>
            <SectionRow className={"gap-x-24 gap-y-20 mt-12"}>
                <div className={"grid place-items-center "}>
                    <div className={"lg:px-16 md:px-14"}>
                        <h2 className={"font-semibold md:text-6xl xs:text-5xl text-4xl text-primary relative text-left mt-8 text-primary relative"}>My Contents
                            <span className={"overflow-hidden left-0 z-1 absolute md:text-9xl text-8xl dark:text-typo-light-100 text-typo-light-100 opacity-10 top-0"}>READ</span>
                        </h2>
                        
                        <p id={"about_text"} className={"text-typo-light-300 text-lg dark:text-typo-dark-100 md:text-left mt-16"}>
                        As a well-rounded technology enthusiast, I actively engage in discussions about backend, frontend, and DevOps, sharing my insights and knowledge with the community. By authoring informative and thought-provoking blog posts, I delve into the intricacies of these domains, shedding light on best practices, emerging trends, and innovative solutions. My passion for writing enables me to contribute to the ongoing conversation within the tech world, fostering growth and collaboration among fellow professionals.
                        </p>
                    </div>
                </div>
                <div id={"SKILL_CAROUSEL"}  className={"grid place-items-center w-full"}>
                    <div className={"flex flex-row overflow-hidden w-full"}>
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
                
            </SectionRow>
            
        </SectionContainer>
    )
}