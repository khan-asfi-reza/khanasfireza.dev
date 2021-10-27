import {useTheme} from "next-themes";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export function useCustomTheme(){
    const {theme, setTheme} = useTheme();

    function toggleTheme() {
        switch (theme){
            case "dark":
                setTheme("light");
                return
            case "light":
                setTheme("dark");
                return
        }
    }

    function getThemeIcon() {
        switch (theme){
            case "dark":
                return <FontAwesomeIcon icon={faMoon}/>
            case "light":
                return <FontAwesomeIcon icon={faSun}/>

        }
    }

    return {
        theme: theme,
        toggleTheme: toggleTheme,
        getThemeIcon: getThemeIcon
    }
}
