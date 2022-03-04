import {SocialLinksJSXList} from "../../assets/data/SocialLinks";
import classNames from "classnames";

const Footer = () => {


    return (
        <footer
            className={"w-full py-12 dark:bg-theme-dark-100 bg-theme-light-100 mt-10 flex flex-col justify-center items-center"}>
            <div className={"flex flex-row md:justify-end"}>
                {SocialLinksJSXList.map((item, key) =>
                    <a key={key} name={item.name} title={item.name} href={item.link}
                       className={classNames("mr-4 md:text-3x text-lg dark:text-typo-dark-300 text-typo-light-300")}>
                        {item.icon}
                    </a>
                )}
            </div>
            <div className={"text-center mt-10"}>
                <small className={"dark:text-typo-dark-200 text-typo-light-300"}>All rights reserved to &copy; Khan Asfi
                    Reza. <br/> Designed and Developed by Khan Asfi Reza </small>
            </div>
        </footer>
    )
}

export default Footer;