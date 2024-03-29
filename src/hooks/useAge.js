import {useEffect, useState} from "react";

export function useAge(from=2019){
    const [state, setState] = useState(null);

    useEffect(()=>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        setState(year - from);
    }, [])

    return state;
}