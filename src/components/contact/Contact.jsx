import styles from './contact.module.css';

export const Contact = () => {
    return (
        <section id="contact" className={styles.container}>
        <contact>
        <h1 className='main_sub'>Contact Me!</h1>
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