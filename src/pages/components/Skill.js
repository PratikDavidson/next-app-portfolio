
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'

function Skill(props) {

    return (
        <div className='text-center shadow-2xl rounded-xl p-5 flex justify-evenly'>
            <div className='flex flex-col justify-center'>
                <BsArrowLeftCircleFill className='cursor-pointer text-gray-600' onClick={props.prevIndex} size={30}/>
            </div>
            <div>
                <h3 className='text-lg font-medium pt-2 pb-2'><b>{props.skill.skill_type}</b></h3>
                <ul>
                    {props.skill.skills.map((skill) => { return (<li>{skill}</li>) })}
                </ul>
            </div>
            <div className='flex flex-col justify-center'>
                <BsArrowRightCircleFill className='cursor-pointer text-gray-600' onClick={props.nextIndex} size={30}/>
            </div>
        </div>
    )
}

export default Skill;