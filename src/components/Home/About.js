import {SectionContainer} from "../Comp/SectionContainer";
import Image from "next/image";
import AboutImage from "../../assets/images/about.png";
import {AboutPageData, AboutPageText} from "../../assets/data/Content";
import {SectionHeader} from "../Comp/SectionHeader";
import {SectionRow} from "../Comp/SectionRow";
import {ABOUT_ID} from "../../assets/data/ContentID";

export const About = () => {

    return(
        <SectionContainer id={ABOUT_ID}>
            <SectionHeader header={"About Me"} text={"Introduction"}/>
            <SectionRow>
                <div>
                    <Image src={AboutImage} alt={"About Khan Asfi Reza"}/>
                </div>

                <div className={"grid place-items-center"}>
                    <div>
                        <p className={"text-typo-light-300 dark:text-typo-dark-100 md:text-left text-center"}>
                            {AboutPageText}
                        </p>
                        <div className={"grid grid-cols-3 gap-2 mt-10 md:justify-items-start justify-items-center"}>
                            {
                                AboutPageData.map(({number, text, suffix}, key) => <>
                                    <div key={key}>
                                        <p className={"text-3xl text-primaryLight font-semibold"}>
                                            {number} {suffix}
                                        </p>
                                        <p className={"md:text-xl text-base font-medium text-typo-light-400 dark:text-typo-dark-400"}>{text}</p>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </SectionRow>
        </SectionContainer>
    )
}