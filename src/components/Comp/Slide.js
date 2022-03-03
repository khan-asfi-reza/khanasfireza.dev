import {useEffect, useReducer, useRef} from "react";
import {useWindowSize} from "../../hooks/useWindowSize";



function useTilt(active, parentRef) {
    const ref = useRef(null);
    const size = useWindowSize();

    useEffect(() => {

        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if(size.width > 768){
                if (!el) {
                    return;
                }
                if (!state.rect) {
                    state.rect = el.getBoundingClientRect();
                }
                state.mouseX = e.clientX;
                state.mouseY = e.clientY;
                const px = (state.mouseX - state.rect.left) / (state.rect.width * 2);
                const py = (state.mouseY - state.rect.top) / (state.rect.height * 2);
                el.style.transform = `perspective(1000px) rotateY(calc(${px - 0.5} * 45deg)) rotateX(calc(${py - 0.5} * -45deg))`;
            }
        };


        const handleMouseLeave = () => {
            el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        }

        const handleMouseEnter = () => {

        }

        parentRef.current.addEventListener("mousemove", handleMouseMove);
        parentRef.current.addEventListener("mouseleave", handleMouseLeave);
        parentRef.current.addEventListener("mouseenter", handleMouseEnter)
        return () => {
            parentRef.current.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active, size.width]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, action) => {
    if (action.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % action.slideLength
        };
    }
    if (action.type === "PREV") {
        return {
            ...state,
            slideIndex: state.slideIndex === 0 ? action.slideLength - 1 : state.slideIndex - 1
        };
    }
    return {}
};

function Slide({ slide, offset, parentRef }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active, parentRef);


    return (
        <>

            <div
                ref={ref}
                className="slide"
                data-active={active}

            >
                <div
                    className="slide-content"
                    style={{
                        backgroundImage: `url('${slide.image}')`,
                        transform: `perspective(1000px) translateX(calc(100% * ${offset}))
                        rotateY(calc(-45deg * ${offset === 0 ? 0 : offset > 0 ? 1 : -1}))`
                    }}
                >

                    <div className="slide-content-inner">
                        <a href={slide.href} target={"_blank"} className="slideTitle lg:text-5xl font-semibold text-blue-500">{slide.title}</a>
                        <p className="slideDescription text-gray-300">{slide.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export function GallerySlides({slides, parentRef}) {
    const [state, dispatch] = useReducer(slidesReducer, initialState, );

    const prevButtonOnClick = () => {
        dispatch({ type: "PREV", slideLength: slides.length })
    }

    const nextButtonOnClick = () => {
        dispatch({ type: "NEXT", slideLength: slides.length })
    }

    const slidesRef = useRef(null)

    useEffect(()=>{
        const Hammer = require('hammerjs');
        const hammer = new Hammer(parentRef.current,);
        hammer.on('swipeleft', prevButtonOnClick)
        hammer.on('swiperight', nextButtonOnClick)
    }, [])

    return (
        <>

            <div ref={slidesRef} className="slides">
                <button onClick={prevButtonOnClick}>‹</button>

                {slides && [...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide} parentRef={slidesRef} offset={offset} key={i} />;
                })}
                <button onClick={nextButtonOnClick}>›</button>
            </div>
        </>
    );
}
