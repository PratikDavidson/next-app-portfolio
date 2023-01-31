
import award_1 from "../../../public/awards/SCA.png"
import award_2 from "../../../public/awards/BPS.png"
import award_3 from "../../../public/awards/VLAppreciation.png"
import { useState } from "react";
import Award from './Award'


const awards = [
    award_1,
    award_2,
    award_3
]

function Awards() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevIndex = () => {
    const isFirstSkill = currentIndex === 0;
    const newSkill = isFirstSkill ? awards.length - 1 : currentIndex-1;
    setCurrentIndex(newSkill)
    }
    const nextIndex = () => {
    const isLastSkill = currentIndex === awards.length - 1
    const newSkill = isLastSkill ? 0 : currentIndex+1;
    setCurrentIndex(newSkill)
    }
    
    return (
        <section className="py-20">
            <h2 className='text-center text-5xl text-teal-600'><b>Appreciations</b></h2>
            <Award award={awards[currentIndex]} prevIndex={prevIndex} nextIndex={ nextIndex}/>
        </section>
    )
}

export default Awards;