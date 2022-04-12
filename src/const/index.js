export const moveX = (x, duration, delay=0 ) => {
    return{
        initial: {
            opacity: 0,
            x: x,
        },
        whileInView: {
            opacity: 1,
            x: 0,
        },
        viewport: {once: true},
        transition: {duration: duration, delay: delay}
    }
}

export const moveY = (y, duration, delay=0 ) => {
    return{
        initial: {
            opacity: 0,
            y: y,
        },
        whileInView: {
            opacity: 1,
            y: 0,
        },
        viewport: {once: true},
        transition: {duration: duration, delay: delay}
    }
}

export const moveFromRight = (delay=0) => {
    return moveX(100, 0.25, delay)
}

export const moveFromLeft = (delay=0) => {
    return moveX(-100, 0.25, delay)
}

export const moveFromBottom = (delay=0) => {
    return moveY(100, 0.25, delay)
}

export const moveFromTop = (delay=0) => {
    return moveY(-100, 0.25, delay)
}
