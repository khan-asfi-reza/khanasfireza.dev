import Image from "next/image";

export const ContentImage = ({children, src, divClassName, ...others}) => {
    return (
        <div className={"h-auto w-auto text-center "+divClassName}>
            <Image src={src} className={"h-full w-full content object-cover"} {...others}/>
            {
                children
            }
        </div>

    )

}

export const ObjectImage = (props) => {
    return(
        <div className={props.className}>
            <img alt={"Bubble"} src={props.src} className={"h-10 w-10 overflow-visible"} {...props}/>
        </div>
    )

}

export const ObjectNextImage = ({src, className, ...others}) => {
    return(
        <div className={className}>
            <Image alt={"Object Image"} src={src} className={"h-6 w-6 overflow-visible"} />
        </div>
    )
}