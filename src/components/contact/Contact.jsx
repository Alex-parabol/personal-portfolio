import React,{useState} from 'react'
import './contact.scss'
import emailjs from 'emailjs-com'

export default function Contact() {
    
    const [message, setMessage ] = useState(false)
   

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_he7y9uu',
        'template_6u2dpo7',
        e.target,
        'user_zICHsks0R6wDThW3oHeb3').then(res =>{
            console.log(res);
        }).catch(err=> console.log(err))
        setMessage(true)
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/handshake-medium.png" alt="Handshake logo" />
            </div>
            <div className="right">
                <h2>Contact me!</h2>
                <form onSubmit={sendEmail}>
                    <input
                    name='user_email'
                    type="email"
                    placeholder='Email'
                    />
                    <textarea name='message' placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                </form> 
                {message ? <p>Thanks for your time. I will replay ASAP!</p> : null}
            </div>
           
        </div>
    )
}
