import {SectionContainer} from "../Comp/SectionContainer";
import {SectionRow} from "../Comp/SectionRow";
import {SocialLinksJSXList} from "../../assets/data/SocialLinks";
import classNames from "classnames";
import {ABOUT_ID, CONTACT_ID, HOME_ID, SERVICES_ID, SKILLS_ID} from "../../assets/data/ContentID";

const Footer = () => {


    return(
        <footer className={"w-full py-12 dark:bg-theme-dark-100 bg-theme-light-100 mt-10 flex flex-col justify-center items-center"}>
            <div className={"flex flex-row md:justify-end"}>
                {SocialLinksJSXList.map((item, key) =>
                    <a key={key} href={item.link} className={classNames("mr-4 md:text-3x text-lg text-typo-dark-300")}>
                        {item.icon}
                    </a>
                ) }
            </div>
            <div className={"text-center mt-10"}>
                <small className={"text-typo-dark-200"}>All rights reserved to &copy; Khan Asfi Reza. <br/> Designed and Developed by Khan Asfi Reza </small>
            </div>
        </footer>
    )
}

export default Footer;