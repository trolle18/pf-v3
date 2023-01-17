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
      duration: .4,
      delayChildren: .05,
      staggerChildren: .02
    },       
  }
}

export const hero = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: .06,
      bounce: 0,
      duration: .5,
      delayChildren: .1,
      staggerChildren: .2
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
      duration: .4,
      delayChildren: .05,
      staggerChildren: .02
    },       
  }
}
