import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

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
      delay: 0.5 
    }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
}

const buttonVariant = {
  hover: {
    scale:1.3, 
    originX: 0,
    color: '#f8e112',
    transition: {
      type: 'spring', 
      stiffness: 300
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
              variants={buttonVariant}
              whileHover='hover'
              key={topping} 
              onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </motion.div>
  )
}

export default Toppings;