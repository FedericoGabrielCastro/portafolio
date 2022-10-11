export const fadeInUP = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: {
        opacity: 1,
        y: 0
    },
}

export const fadeInUpChildrens = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}