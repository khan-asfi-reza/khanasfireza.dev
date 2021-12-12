import classNames from "classnames";
import {forwardRef, useState} from "react";

const MyEditor = forwardRef(({classname, onChange, text,  ...extra}, ref) => {

    const [isFocus, setIsFocus] = useState(false);

    const onFocus = () => {
        setIsFocus(true)
    }

    const onBlur = () => {
        setIsFocus(false)
    }

    return(
        <>
            <div className={classNames(classname, "relative")}>
                <div ref={ref} onFocus={onFocus} onBlur={onBlur} onInput={onChange} className={"w-full focus:outline-none"} contentEditable={"true"}>

                </div>
                {
                    (!text && !isFocus) && <span className={"z-10 absolute pointer-events-none top-1/2 transform -translate-y-1/2"}>Your Message</span>
                }
            </div>
        </>
    )
});



export default MyEditor;