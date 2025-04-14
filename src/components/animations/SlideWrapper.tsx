"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SlideWrapperProps {
  children: ReactNode
  direction?: "left" | "right"
  delay?: number
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({ 
  children, 
  direction = "right",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "right" ? 40 : -40,
        filter: "blur(2px)"
      }}
      animate={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
          delay: delay * 0.15,
          duration: 1.5, // slower entrance
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      exit={{
        opacity: 0,
        x: direction === "right" ? -40 : 40,
        filter: "blur(2px)",
        transition: {
          duration: 2.2, // slower exit
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default SlideWrapper
