import {useTheme} from "next-themes";
import {FaMoon, FaSun} from "react-icons/fa";


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
            case "system":
                setTheme("dark");
        }
    }

    function getThemeIcon() {
        switch (theme){
            case "dark":
                return <FaMoon/>
            case "light":
                return <FaSun/>
            case "system":
                return <FaMoon/>
        }
    }

    return {
        toggleTheme: toggleTheme,
        getThemeIcon: getThemeIcon,
        theme: theme
    }
}
