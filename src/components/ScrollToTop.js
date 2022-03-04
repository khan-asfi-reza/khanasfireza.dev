import {HOME_ID} from "../assets/data/ContentID";
import {FaArrowUp} from "react-icons/fa";
import {useEffect, useState} from "react";

const ScrollToTop = () => {

    const [visible, setVisible] = useState("invisible opacity-0")

    useEffect(()=>{
        window.addEventListener("scroll", (e)=>{
            if(document.scrollingElement.scrollTop > 100){

                setVisible("visible opacity-100")
                return
            }
            setVisible("invisible opacity-0")
        })
    }, [])

    return(
        <div className={"fixed bottom-10 right-2 z-100 transition duration-500 "+visible}>
            <a href={`#${HOME_ID}`} className={"grid place-items-center h-10 w-10 rounded-full bg-blue-500 text-white hover:bg-blue-400"}>
                <FaArrowUp/>
            </a>
        </div>
    )
}

export default ScrollToTop;