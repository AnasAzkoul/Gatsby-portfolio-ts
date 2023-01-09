/* eslint-disable prettier/prettier */
import React from 'react'
import { motion } from 'framer-motion'
import {Sections} from '../../Utils/types';
import useSelectCurrentSection from '../../hooks/useSelectCurrentSection';
import { setCurrentSection } from '../../app/features/UISlice';

type Props = {
  children: React.ReactNode; 
  axis?: 'x' | 'y'; 
  direction?: number; 
  delay?: number; 
  styles?: string; 
  as?: 'section' | 'div'; 
  id?: Sections
}

const AnimatedDiv = ({children, axis, direction, delay, styles, as, id}: Props) => {
  const {dispatch} = useSelectCurrentSection(); 
  
  if (as === `section`) {
    return (
      <motion.section
        id={id}
        onViewportEnter={() => dispatch(setCurrentSection(id as Sections))}
        className={styles}
      >
        {children}
      </motion.section>  
    )
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.75, delay}}
      variants={{
        hidden: {opacity: 0, [axis!]: direction}, 
        visible: {opacity: 1, [axis!]: 0}
      }}
      className={`${styles}`}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
