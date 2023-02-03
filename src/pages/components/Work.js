import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'

function Work(props) {

    return (
        <div className='text-center shadow-2xl rounded-xl p-5 flex justify-evenly'>
            <div className='flex flex-col justify-center'>
                <BsArrowLeftCircleFill className='cursor-pointer text-gray-600' onClick={props.prevIndex} size={30}/>
            </div>
            <div>
                <h3 className='text-lg font-medium pt-2 pb-2'><b>{props.worksData['work']?props.worksData['work']:''}</b></h3>
                <ul>
                    {props.worksData['work_desc']?.map((work) => { return (<p key={work.toString()}>{work}</p>) })}
                </ul>
            </div>
            <div className='flex flex-col justify-center'>
                <BsArrowRightCircleFill className='cursor-pointer text-gray-600' onClick={props.nextIndex} size={30}/>
            </div>
        </div>
    )
}

Work.defaultProps = {
    'worksData': { 'work': 'Kaggle - Digit Recognizer', 'work_desc': ['It is based on identifying handwritten digits from the "Hello World!" dataset in computer vision (MNIST).'] }
}

export default Work;