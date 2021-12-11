import React,{useRef} from 'react';
import emailjs from 'emailjs-com';

// import contact_img from '../assets/contact.svg';
import contact_img from '../assets/letter.svg';
import '../css/contact.css';
import SocialIcons from './SocialIcons';

const Contact=()=>{
    return (
        <div className="main-contact" >
            <h2>Contact Me!</h2>
            <div className="contact">
                <Form/>
                    <div>
                        <img src={contact_img} className="svg"></img>
                    </div>
            </div>
            <SocialIcons/>
        </div>
    );
}

const Form=()=>{
    const form = useRef();

    function sendEmail(e){

        if(form.current.user_name.value===''|| form.current.user_email.value===''|| form.current.message.value==='')
        {
            alert('Please fill all the fields');
            
        }
        else{
        console.log('printing e');
        console.log(form.current.user_name.value);
        e.preventDefault();
        emailjs.sendForm('service_a398t79', 'template_9rdmlrm', form.current, 'user_nnbvDkvkEd4LySJUm1kBK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        emailjs.sendForm('service_a398t79', 'template_8qmc6c1', form.current, 'user_nnbvDkvkEd4LySJUm1kBK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert('Message sent succesfully');
    }
    }

    return(
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <div className="field-group">
                    <div>Name</div>
                    <div className="field"><input type="text" name="user_name"></input></div>
                </div>
                <div className="field-group">
                    <div>Email</div>
                    <div className="field"><input type="text" name="user_email"></input></div>
                </div>
                <div className="field-group">
                    <div>Message</div>
                    <div className="field"><textarea name="message"></textarea></div>
                </div>

                {/* <button onClick={sendEmail}>Send</button> */}
                <button type="submit" >Send</button>
            </form>
        </div>
    );
}

export default Contact;