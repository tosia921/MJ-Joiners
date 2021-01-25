export const pageAnimation = {
    hidden: {
        opacity: 0,
        y:150
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export const headerAnimation = {
    hidden: {
        opacity: 0,
        y:-300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
}

export const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1}
    }