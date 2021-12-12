import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter,} from "react-icons/fa";
import {SiFiverr, SiUpwork} from "react-icons/si";

export const UPWORK_PROFILE = "https://www.upwork.com/freelancers/~019a9fe44e38691204";

export const FIVERR_PROFILE = "https://www.fiverr.com/khanasfireza";

export const SocialLinksJSXList = [
    {
        "name": "Github",
        "icon": <FaGithub/>,
        "link": "https://www.github.com/khan-asfi-reza",
        "className": "dark:text-secondary text-typo-light-300 "
    },
    {
        "name": "Linkedin",
        "icon": <FaLinkedin/>,
        "link": "https://www.linkedin.com/in/khan-asfi-reza/",
        "className": "text-purple-400",
    },
    {
        "name": "Upwork",
        "icon": <SiUpwork/>,
        "link": UPWORK_PROFILE,
        "className": "text-green-500"
    },
    {
        "name": "Facebook",
        "icon": <FaFacebook/>,
        "link": "https://www.facebook.com/khanasfirezapranto10",
        "className": "text-blue-400"
    },
    {
        "name": "Twitter",
        "icon": <FaTwitter/>,
        "link": "https://www.twitter.com/asfi_reza",
        "className": "text-primary"
    },
    {
        "name": "Instagram",
        "icon": <FaInstagram/>,
        "link": "https://www.instagram.com/khan_asfi_reza",
        "className": "text-pink-500"
    },

]

