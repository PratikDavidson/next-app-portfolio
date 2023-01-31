import { useForm } from 'react-hook-form'

function Contact() {

    const { register, trigger, formState: { errors } } = useForm();
    const onSubmit = async (e) => {
        const isValid = await trigger()
        if (!isValid) 
            e.preventDefault()
        }
    const nameFieldError = (err) => {
        if (!err)
            return 'border-4'
        else {
            console.log('hello')
            return 'border-4 border-rose-500'
        }
    }
    const emailFieldError = (err) => {
        if (!err)
            return 'border-4'
        else {
            console.log('hello')
            return 'border-4 border-rose-500'
        }
    }
    const msgFieldError = (err) => {
        if (!err)
            return 'border-4'
        else {
            console.log('hello')
            return 'border-4 border-rose-500'
        }
    }
    return (
        <section className='py-20'>
            <div className='flex flex-col gap-5 text-center'>
            <h2 className='text-5xl text-teal-600'><b>Contact Me</b></h2>
                <form className='flex flex-col gap-5' target='_blank' onSubmit={onSubmit} action='https://formsubmit.co/01e9e243808aa0eb5d01d7c9685fe7b1' method='POST'>
                    <div>
                        <input className={nameFieldError(errors.name)+' w-full'} type='text' placeholder='Name' {...register('name', { required: true, maxLength: 100 })} />
                        {errors.name && (<p className='flex text-sm text-rose-500'>
                        {errors.name.type === 'required' && 'This Field is required.'}
                        {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                        </p>)}
                    </div>    
                    <div>
                        <input className={emailFieldError(errors.name)+ ' w-full'} type='email' placeholder='Email' {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                        {errors.email && (<p className='flex text-sm text-rose-500'>
                        {errors.email.type === 'required' && 'This Field is required.'}
                        {errors.email.type === 'partten' && 'Invalid email address.'}
                        </p>)}
                    </div>
                    <div>
                        <textarea className={msgFieldError(errors.name)+ ' w-full'} type='text' placeholder='Message' rows='4' columns='50' {...register('message', { required: true, maxLength: 2000 })} />
                        {errors.message && (<p className='flex text-sm text-rose-500'>
                        {errors.message.type === 'required' && 'This Field is required.'}
                        {errors.message.type === 'maxLength' && 'Max length is 2000 characters.'}
                        </p>)}
                    </div>
                
                <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 rounded-md'>Send me a message</button>
                </form>
                <p>Happy to collaborate & learn more</p>
            </div>
        </section>
    )
}

export default Contact;