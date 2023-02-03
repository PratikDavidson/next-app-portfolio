import Skill from "./Skill";
import { useState } from "react";

function Skills() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevIndex = () => {
    const isFirstSkill = currentIndex === 0;
    const newSkill = isFirstSkill ? skillsData.length - 1 : currentIndex-1;
    setCurrentIndex(newSkill)
  }
  const nextIndex = () => {
    const isLastSkill = currentIndex === skillsData.length - 1
    const newSkill = isLastSkill ? 0 : currentIndex+1;
    setCurrentIndex(newSkill)
  }

  const skillsData = [
    { 'skill_type': 'Programming Skills', 'skills': ['Python', 'Java', 'C', 'SQL', 'HTML+CSS+Javascript with React'] },
    { 'skill_type': 'Software Skills', 'skills': ['MS Excel', 'PowerBI', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Spline','Blender','Adobe After Effects'] },
    { 'skill_type': 'Hardware Skills', 'skills': ['Arduino', 'RaspberryPI'] },
    {'skill_type':'ML Skills','skills':['Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scikit-learn','Tensorflow + Keras','Streamlit']},
     
    ]

  return (

    <section className='py-20'>
      <div className='grid'>
        <h2 className='text-center text-5xl text-teal-600'><b>My Skills</b></h2>
        <Skill skill={skillsData[currentIndex]} prevIndex={prevIndex} nextIndex={ nextIndex} />
      </div>
    </section>  
    )
}

export default Skills;