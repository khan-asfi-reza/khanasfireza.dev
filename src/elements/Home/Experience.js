import {SectionContainer} from "../../components/SectionContainer";
import classnames from "classnames";
import classNames from "classnames";
import {ExperienceContent} from "../../assets/data/Content";
import {motion} from "framer-motion";
import {moveFromLeft, moveFromTop} from "../../const";

const headerClassNameFunc = () => classnames("font-semibold md:text-6xl xs:text-5xl text-4xl text-primary",);


export function Experience() {


    return (
        <SectionContainer id={"experience"} className={"relative mt-20 overflow-hidden "}>
            <motion.div {...moveFromLeft()}>
                <h2 className={headerClassNameFunc()}>What I Do?</h2>
                <hr className={classnames("w-20 mt-3 md:mx-0 mx-auto text-primary bg-primary w-25 h-1")}/>
                <span
                    className={"overflow-hidden z-1 absolute md:text-9xl text-8xl dark:text-typo-light-100 text-typo-light-100 opacity-10 top-0"}>WHAT</span>

            </motion.div>
            <div className={"grid md:grid-cols-3 lg:gap-14 gap-6 mt-20"}>

                {
                    ExperienceContent.map((elem, key) => (
                        <motion.div {...moveFromTop(key * 0.23)}
                                    id={`expCont${key}`} key={key}
                                    className={classNames("w-full  dark:bg-theme-dark-100 bg-theme-light-50 lg:p-8 p-6 relative rounded-2xl md:mx-0 mx-auto",)}>
                            <div
                                className={classnames("absolute h-16 w-16 rounded-full grid place-items-center dark:bg-theme-dark-200 border-4 dark:border-theme-dark-100 bg-theme-light-200 -top-6 text-3xl", elem.color)}>
                                {elem.icon}
                            </div>
                            <h3 className={classnames("mt-8 text-xl font-medium", elem.color)}>{elem.name}</h3>
                            <hr className={classnames("w-20 mt-3", elem.color)}/>
                            <p className={"text-typo-light-300 dark:text-typo-dark-100 mt-8"}>{elem.text}</p>
                        </motion.div>
                    ))
                }
            </div>
        </SectionContainer>
    )
}