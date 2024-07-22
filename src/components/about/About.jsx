import styles from './about.module.css';
export const About = () => {
    return (
        <section id="about" className={styles.container}>
            <about>
                <h1 className='main_sub'>About Me</h1>
                <p className='subsub'>Hello, my name is Alek and I am studying computer science as a Senior at the University of Minnesota. </p>
                <p className='subsub'>I like cooking, sports, exercise, video games, traveling, learning languages, and coding in my free time! </p>
                <p className='subsub'>Right now I am trying to learn how to garden and am taking self-defense classes while being a CSCI teaching assistant.</p>

            </about>
        </section>
    );
}
export default About;