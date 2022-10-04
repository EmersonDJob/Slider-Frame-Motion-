
import './App.css';
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from './image.js'


function App() {

  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    
    <div className="App">
     <motion.div ref={carousel} className='carousel'>
        <motion.div  drag="x" dragConstraints={{right:0 , left : -width}} className='inner-carousel'>
          {images.map((img) => {
            return(
              <motion.div className='item' key={images}>
                <img src={img} alt=""/>
              </motion.div>

            )
          })}
        </motion.div>
     </motion.div>
    </div>
  );
}

export default App;
