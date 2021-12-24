import {SectionContainer} from "../Comp/SectionContainer";
import {SectionRow} from "../Comp/SectionRow";
import {SocialLinksJSXList} from "../../assets/data/SocialLinks";
import classNames from "classnames";

const Footer = () => {

    return(
        <footer className={"w-full py-12 bg-primary mt-10"}>
            <SectionContainer className={"mt-0"}>

                <h2 className={"text-4xl md:text-left text-center text-typo-dark-400 "}>Khan Asfi Reza</h2>
                <SectionRow className={"mt-4 p-0 md:relative md:place-items-stretch grid place-items-center"}>
                    <div>
                        <div className={"flex flex-row"}>
                            <a href="" className={"mr-3 md:text-xl text-l text-typo-dark-300"}>Home</a>
                            <a href="" className={"mr-3 md:text-xl text-l text-typo-dark-300"}>About</a>
                            <a href="" className={"mr-3 md:text-xl text-l text-typo-dark-300"}>Skills</a>
                            <a href="" className={"mr-3 md:text-xl text-l text-typo-dark-300"}>Services</a>
                            <a href="" className={"mr-3 md:text-xl text-l text-typo-dark-300"}>Contact</a>
                        </div>
                    </div>

                    <div className={"flex flex-row md:justify-end"}>
                        {SocialLinksJSXList.map((item, key) =>
                            <a key={key} href={item.link} className={classNames("mr-4 md:text-3x text-ll text-typo-dark-300")}>
                                {item.icon}
                            </a>
                        ) }
                    </div>
                </SectionRow>


                <div className={"text-center mt-10"}>
                    <small className={"text-typo-dark-200"}>All rights reserved to &copy; Khan Asfi Reza. <br/> Designed and Developed by Khan Asfi Reza </small>
                </div>

            </SectionContainer>

        </footer>
    )
}

export default Footer;