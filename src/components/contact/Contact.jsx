import { useState } from 'react';

import styles from './contact.module.css';
import email from '../../assets/contact/email.png'
import whatsapp from '../../assets/contact/whatsapp.png'

export const Contact = () => {
    const [emailText, setEmailText] = useState('alek.holiman@gmail.com');
    const [whatsappText, setWhatsappText] = useState('+1 (952) 843 3397');
    const copyToClipboard = (text, setText) => {
        navigator.clipboard.writeText(text).then(() => {
            setText('Copied!');
            setTimeout(() => setText(text), 500);
        });
    };

    return (
        <section id="contact" className={styles.container}>
        <contact>
        <h1 className='main_sub'>Contact me here!</h1>
        <div>
            <form action="https://api.web3forms.com/submit" method="POST">
                {/* Change the key here in the future if you do not want to receive messages */}
                <input type="hidden" name="access_key" value="f3e79d51-0381-414b-9df5-e540d938bc37" />
                <in>
                    <input type="text" placeholder='Your Name' name="name" required />
                </in>
                <in>
                    <input type="email" placeholder='Your Email' name="email" required />
                </in>
                <in>
                    <textarea name="message" placeholder='Type message here'  required></textarea>
                </in>
                <in>
                    <button type="submit">Submit</button>
                </in>
            </form>
        </div>
        </contact>
</section>
    );
}

export default Contact;