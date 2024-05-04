import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
export default function Reveal({children, className}) {
    const ref = useRef(null)
    const inView = useInView(ref, {once : true});
    const mainControls = useAnimation()
    const slideControls = useAnimation()
    useEffect(() => {
        if(inView){
            mainControls.start('visible');
            slideControls.start('visible');
            
        }
    }, [inView]);
    const defaults = '100%'
    console.log("classes: ",className)
  return (
    <motion.div
    className={className}
    variants={{hidden : {opacity: 0, y: 75}, visible: {opacity: 1, y : 0}}}
        animate = {mainControls}
        initial = 'hidden'
        transition={{duration : 0.5, delay : 0.25}}
    ref={ref}
     style={{
        position : 'relative',
        width : 'fit-content' || defaults,
        overflow :'hidden'
        
    }}>
            {children}
        <motion.div 
        variants={{hidden: {left : 0}, visible : {left : '100%'}}}
        animate = {slideControls}
        transition={{duration: 0.5, ease : 'easeIn'}}
        initial = 'hidden'
        style={{
            position: 'absolute',
            top: 0,
            bottom : 0,
            left : 0,
            right : 0,
            background : 'white',
            zIndex : 20,

        }}>

        </motion.div>
    </motion.div>
  )
}
