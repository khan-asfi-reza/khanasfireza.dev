import Particles from "react-tsparticles";
import {useTheme} from "next-themes";

export const ContentParticle = ({id}) => {
    const {theme, setTheme} = useTheme();
    return(
        (
            <Particles id={id || "particle"}
                       style={{position: "absolute"}}
                       options={{fullScreen: false,
                           fpsLimit: 120,
                           interactivity: {
                               events: {
                                   onClick: {
                                       enable: true,
                                       mode: "push",
                                   },
                               },
                               modes: {
                                   bubble: {
                                       distance: 400,
                                       duration: 2,
                                       opacity: 0.8,
                                       size: 40,
                                   },
                                   push: {
                                       quantity: 4,
                                   },
                                   repulse: {
                                       distance: 200,
                                       duration: 0.4,
                                   },
                               },
                           },
                           particles: {
                               color: {
                                   value: theme === 'dark' ? "#ffffff" : "#323232",
                               },

                               collisions: {
                                   enable: true,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outMode: "bounce",
                                   random: false,
                                   speed: 1,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 4000,

                                   },
                                   value: 80,
                               },
                               opacity: {
                                   value: 0.7,
                               },
                               shape: {
                                   type: "circle",
                               },
                               size: {
                                   random: true,
                                   value: 7,
                               },
                           },}}
                       canvasClassName={"particles"}/>

        )
    )
}