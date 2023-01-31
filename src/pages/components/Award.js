import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import Image from "next/image";

function Award(props) {

    return (
        <div className="flex">
            <div className='flex flex-col justify-center'>
                <BsArrowLeftCircleFill className='cursor-pointer text-gray-600' onClick={props.prevIndex} size={30}/>
            </div>
            <div className="p-5 shadow-2xl rounded-xl">
                <Image src={props.award} />
            </div>
            <div className='flex flex-col justify-center'>
                <BsArrowRightCircleFill className='cursor-pointer text-gray-600' onClick={props.nextIndex} size={30}/>
            </div>
        </div>
    )
}

export default Award;