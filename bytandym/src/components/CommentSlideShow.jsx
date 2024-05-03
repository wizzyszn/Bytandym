import React, { useEffect, useState } from 'react'
import cascade1 from '../Assets/cascded/3.png'
import cascade2 from '../Assets/cascded/2.png'
import cascade3 from '../Assets/cascded/1.png'
import {motion,AnimatePresence} from 'framer-motion'
const images  = [cascade1,cascade2,cascade3];

    
export default function CommentSlideShow() {
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() =>{
            setIndex(prevIndex => prevIndex === images.length -1 ? 0 : prevIndex + 1);
        }, 3000);
        return () =>{
            clearInterval(interval)
        }
    }, [])
  
  return (
    <div className=' justify-self-center'> 
        <AnimatePresence mode='wait'>
            <motion.div  className=' flex items-center h-96'
            >
            <motion.img
        initial ={{opacity : 0, x : '-100%'}}
        animate = {{opacity : 1, x : 0}}
        exit={{opacity : 0, x : '-100%'}}
        transition={{duration : 0.5, ease :'linear'}}
         key={index} src={images[index]} alt="comments" />
            </motion.div>
        
        </AnimatePresence>
        
    </div>
  )
}
