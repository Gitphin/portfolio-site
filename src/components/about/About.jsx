import React, { useState, useEffect } from 'react';
import styles from './about.module.css';

import img from '../../assets/about/img.jpg';
import img2 from '../../assets/about/img2.jpg';
import img3 from '../../assets/about/img3.jpg';
import img4 from '../../assets/about/img4.jpg';
import img5 from '../../assets/about/img5.jpg';
import img8 from '../../assets/about/img8.jpg';
import img9 from '../../assets/about/img9.jpg';
import img10 from '../../assets/about/img10.jpg';

const images = [
    img,
    img3,
    img4,
    img5,
    img8,
    img9,
    img2,
    img10,
];

export const About = () => {
    const [cur, set_image] = useState(0);

    const nextImage = () => {
        set_image((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        set_image((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="about" className={styles.container}>
            <about>
                <h1 className='main_sub'>About Me</h1>
                <div>
                    <button onClick={prevImage}>&lt;</button>
                    <img src={images[cur]} class={styles.fade} alt="Images"/>
                    <button onClick={nextImage}>&gt;</button>
                </div>
                <p className='subsub'>Hello, my name is Alek and I am studying computer science as a Senior at the University of Minnesota.</p>
                <p className='subsub'>I like cooking, sports, exercise, video games, traveling, learning languages, and coding in my free time!</p>
                <p className='subsub'>Right now I am trying to learn how to garden and am taking self-defense classes while being a CSCI teaching assistant.</p>
            </about>
        </section>
    );
}

export default About;