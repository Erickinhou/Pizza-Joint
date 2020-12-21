import React from 'react';
import {motion, useCycle} from 'framer-motion'

const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        type: 'spring',
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    },
    animationTwo: {
      y: [0, -40],
      x: 0,
      transition: {
        type: 'spring',
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    }
  };
const Loader = ()=>{
    const [animation, cyleAnimation] = useCycle("animationOne", "animationTwo");
    return (
        <>
        <motion.div className="loader"
            variants={loaderVariants}
            animate={animation}
        >

        </motion.div>
        <div onClick={() => cyleAnimation()}> Change Loader</div>
        </>
    )
}

export default Loader