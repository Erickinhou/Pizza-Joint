import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0, 
    x: '100vw'
  },
  visible: {
    opacity: 1, 
    x: 0 ,
    transition: {
      type: 'spring', 
      mass: 0.4, // higher means move slower
      damping: 8, // change the ocilation 
      when:'beforeChildren',
      staggerChildren: 0.4 // the children is animate 0.4s after
    }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
}
const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  }
} 


const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true)
  useEffect(() => { 
    setTimeout(()=>{
      setShowModal(true)
    }, 5000)
  }, [setShowModal])
  setTimeout(()=>{
    setShowTitle(false)
    console.log(showTitle);
  }, 4000)
  return (
    <motion.div
    variants= {containerVariants}
    initial="hidden"
    animate="visible"
    exit='exit'
    className="container order">
      <AnimatePresence>
      {      
      showTitle && (<motion.h2 exit={{opacity: 0}}>Thank you for your order :)</motion.h2>)
      }      
      </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div  variants={childVariants} key={topping}>{topping}</motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
