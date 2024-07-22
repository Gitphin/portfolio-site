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
                <connect onClick={() => copyToClipboard('alek.holiman@gmail.com', setEmailText)}><img src={email}></img><div className={styles.connect}> {emailText}</div></connect>
                <connect onClick={() => copyToClipboard('+1 (952) 843 3397', setWhatsappText)}><img src={whatsapp}></img><div className={styles.connect}>{whatsappText}</div></connect>
            </contact>
        </section>
    );
}

export default Contact;