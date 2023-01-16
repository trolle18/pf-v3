export const element = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}


export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            bounce: 0,
            duration: 0.4,
            delayChildren: .05,
            staggerChildren: 0.02
        },       
    }
}


export const articleFramer = {
    hidden: { 
        opacity: 0,
        x: 10
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            bounce: 0,
            duration: 0.4,
            delayChildren: .05,
            staggerChildren: 0.02
        },       
    }
}
