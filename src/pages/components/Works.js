
import { useState } from "react";
import Work from './Work'

function Works() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevIndex = () => {
    const isFirstwork = currentIndex === 0;
    const newwork = isFirstwork ? worksData.length - 1 : currentIndex-1;
    setCurrentIndex(newwork)
  }
  const nextIndex = () => {
    const isLastwork = currentIndex === worksData.length - 1
    const newwork = isLastwork ? 0 : currentIndex+1;
    setCurrentIndex(newwork)
  }
  
  const worksData = [
    { 'work': 'Kaggle - Digit Recognizer', 'work_desc': ['It is based on identifying handwritten digits from the "Hello World!" dataset in computer vision (MNIST).'] },
    { 'work': 'Ceiling Robotic Arm', 'work_desc': ['It is a small prototype of the industrial robotic arm KUKA that helps in the placement of incomming materials to their proper destination.'] },
    { 'work': 'Semi-autonomous obstacle detection bot', 'work_desc': ['It is a bot which traverse based on the obstacle detected using ultrasonic waves.'] },
    { 'work':'Smart blind-stick using Mini-YOLO','work_desc':['It is a blind-stick that can not only detect the obstacle through ultasonic waves but also gives info about the object in voice with he help of camera feature.']},
    { 'work':'Porfolio Website','work_desc':['This portfolio website I designed using Reactjs during my learning phase on Web Technologies.']}, 
    ]

  return (

    <section className='py-20'>
      <div className='grid'>
        <h2 className='text-center text-5xl text-teal-600'><b>My Work</b></h2>
        <Work worksData={worksData[currentIndex]} prevIndex={prevIndex} nextIndex={ nextIndex} />
      </div>
    </section>  
    )
}

export default Works;