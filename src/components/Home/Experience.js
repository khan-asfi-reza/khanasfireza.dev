import {SectionContainer} from "../Comp/SectionContainer";
import {SectionHeader} from "../Comp/SectionHeader";
import {ExperienceContent} from "../../assets/data/Content";
import {SectionRow} from "../Comp/SectionRow";
import classNames from "classnames";
import {useEffect, useState} from "react";
import {DrawingHeader} from "../Comp/Drawings";

export function Experience() {

    const [current, setCurrent] = useState(0);
    const [animate, setAnimate] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current) => current === ExperienceContent.length - 1 ? 0 : current + 1)
            setAnimate("animation-opacity");
            setTimeout(() => {
                setAnimate("")
            }, 500)
        }, 4000)

        return () => {
            clearInterval(interval)
        };

    }, [])


    return (
        <SectionContainer className={"max-w-full dark:bg-theme-dark-100 bg-theme-light-100"}>

            <DrawingHeader header={"Experience"} text={"My Experience on different stacks"}/>

            <div className={"container mx-auto mt-10 py-16"}>
                <SectionRow className={"gap-10"}>
                    <div
                        className={"relative overflow-visible border border-4 border-secondary xl:h-97 xl:w-97 lg:h-97 lg:w-97 sm:w-96 sm:h-96 h-80 w-80 rounded-full md:mx-0 mx-auto"}>
                        {
                            ExperienceContent.map(({icon, position,}, key) => <>
                                    <div onClick={() => {
                                        setCurrent(key)
                                    }} key={key}
                                         className={classNames(" cursor-pointer absolute w-28 h-28 rounded-full bg-secondary text-typo-light-100 border-primaryLight border-2", position, key === current && "bg-primaryLight text-typo-dark-400 animation-opacity")}>
                                        <div className={"grid place-items-center w-full h-full text-5xl "}>
                                            {icon}
                                            <div
                                                className={"absolute bg-primaryLight w-5 h-5 rounded-full top-0 right-0 animate-ping"}>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                            <p className={classNames("text-center font-semibold md:text-2xl sm:text-xl text-primaryLight", animate)}>
                                {ExperienceContent[current].name}
                            </p>
                        </div>
                    </div>
                    <div className={'grid place-items-center'}>
                        <div>
                            <div className={animate}>
                                <h3 className={"text-2xl font-semibold text-typo-light-400 dark:text-typo-dark-400"}>{ExperienceContent[current].name}</h3>
                                <p className={"mt-12 text-typo-light-200 dark:text-typo-dark-100"}>
                                    {ExperienceContent[current].text}
                                </p>
                            </div>
                            <div className={"mt-12 flex flex-row justify-between"}>
                                <div>
                                    <h3 className={"text-3xl font-semibold text-primaryLight"}>20+</h3>
                                    <p className={"text-xl dark:text-typo-dark-100"}>Frameworks</p>
                                </div>

                                <div>
                                    <h3 className={"text-3xl font-semibold text-primaryLight"}>20+</h3>
                                    <p className={"text-xl dark:text-typo-dark-100"}>Languages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionRow>
            </div>


        </SectionContainer>
    )
}