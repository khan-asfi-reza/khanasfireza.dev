import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {useWindowSize} from "../hooks/useWindowSize";

export default function Carousel({
                                     children,
                                     className,
                                     controls = true,
                                     navigation = true,
                                     autoplay = false,
                                     duration = 10000,
                                     ...props
                                 }) {
    const carouselTrack = useRef(null);
    const carousel = useRef(null);
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    const windowSize = useWindowSize();

    const getSlideArray = () => {
        return Array.from(carouselTrack.current.children)
    }

    const getNextSlideNumber = () => (currentSlideNumber === getSlideArray().length - 1 ? 0 : currentSlideNumber + 1)

    const getPrevSlideNumber = () => (currentSlideNumber === 0 ? getSlideArray().length - 1 : currentSlideNumber - 1)

    const getCurrentSlide = () => {
        const slides = getSlideArray();
        return slides[currentSlideNumber];
    }

    const getNextSlide = () => {
        const slides = getSlideArray();
        return slides[getNextSlideNumber()];
    }

    const getPreviousSlide = () => {
        const slides = getSlideArray();
        return slides[getPrevSlideNumber()];
    }

    const moveSlide = (slideToView, slideNumber) => {
        getSlideArray()[currentSlideNumber].classList.remove("carousel-active")
        getSlideArray()[currentSlideNumber].classList.add("carousel-inactive")
        carouselTrack.current.style.transform = `translateX(-${slideToView.style.left})`;
        setCurrentSlideNumber(slideNumber);
        getSlideArray()[slideNumber].classList.add("carousel-active");
    }

    const handleCarouselLeft = () => {
        const nextSlide = getPreviousSlide();
        moveSlide(nextSlide, getPrevSlideNumber())
    }


    const handleCarouselRight = () => {
        const nextSlide = getNextSlide();
        moveSlide(nextSlide, getNextSlideNumber())
    }

    const setCarouselHeight = () => {
        let maxHeight = 0;
        getSlideArray().map((each) => {
            maxHeight = Math.max(maxHeight, each.children[0].getBoundingClientRect().height)
        })
        carousel.current.style.height = maxHeight + 20 + 'px';
    }


    useEffect(() => {
        const trackElementArray = getSlideArray();
        const slideWidth = trackElementArray[0].getBoundingClientRect();
        trackElementArray.map((each, key) => {
            each.style.left = (slideWidth.width * key) + 'px';
        })
        setCarouselHeight();
        trackElementArray.map((each, k) => {
            if (k !== currentSlideNumber) {
                each.classList.add("carousel-inactive")
            }
        })
    }, [])

    useEffect(() => {
        let interval;
        if (autoplay) {
            interval = setTimeout(() => {
                handleCarouselRight();
            }, duration)
        }
        return () => {
            clearTimeout(interval);
        }
    }, [currentSlideNumber])

    useEffect(() => {
        setCarouselHeight();
    }, [windowSize.width])


    return (<div ref={carousel} className={classNames("carousel", className)}>
            <div className={"carousel-container"}>
                <ul ref={carouselTrack} className={"carousel-track"}>
                    {children}
                </ul>
            </div>
            {controls && (<>
                    <button onClick={handleCarouselLeft} className={"carousel-button cb-left"}>
                        <FaArrowLeft/>
                    </button>
                    <button onClick={handleCarouselRight} className={"carousel-button cb-right"}>
                        <FaArrowRight/>
                    </button>
                </>)}
            {navigation && (<div
                    className={"overflow-x-hidden overflow-y-auto scrollbar-hide flex items-center absolute bottom-2 left-1/2 h-6 transform -translate-x-1/2"}>
                    {children.map((e, k) => {
                        return (<div key={k}
                                     className={classNames("h-3 w-3 rounded-full bg-gray-800 mx-3", k === currentSlideNumber && "transform scale-125")}>

                            </div>)
                    })}
                </div>)}
        </div>)
}

export function CarouselSlide({children, ...props}) {
    return (<li className={"carousel-slide"}>

            {children}

        </li>)
}