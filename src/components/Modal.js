import React from 'react'
import { Link } from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

const backdrop = {
    hidden:{
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition:{
            when: 'beforeChildren' //before occurs the modal, and after the backdrop
        }
    }
}
const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "200px", 
      opacity: 1,
    },
  }

const Modal = ({showModal, setShowModal})=>{
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className= 'backdrop'
                variants={backdrop}
                initial='hidden'
                animate='visible'
                exit='hidden'
                >
                    <motion.div variants={modal} className='modal'>
                        <p>Do you want to make another pizza?</p>
                        <Link to='/'>
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;