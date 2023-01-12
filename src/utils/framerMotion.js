export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        },       
    },
    showFast: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        },       
    },
}

export const element = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export const elemFast = {
    hidden: { opacity: 0 },
    showFast: { opacity: 1 }
}


export const article = {
    hidden: { opacity: 0 },
    showSlow: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06
        },       
    },
    showFast: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        },       
    },
}