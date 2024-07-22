import React, { useState, useEffect } from 'react';

import styles from './header.module.css';
import me from '../../assets/header/me.png'
import github from '../../assets/header/github.png'
import resume from '../../assets/header/resume.png'
import linkedin from '../../assets/header/linkedin.png'
import leet from '../../assets/header/leet.png'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <section id = "header" className={styles.container}>
      <span className={styles.toggleIcon}>{darkMode ? '🌙' : '🌞'}</span>
      <img className={styles.me} src={me} alt="Me" onClick={toggleDarkMode} />
      <h1 className="main">Hello, I'm Alek</h1>
        <p className="sub">Find my resume and socials below!</p>
      <contactborder>
        <span>
            <a href="../../assets/header/AlekHolimanResume.pdf" download>
              <img src={resume}/>
            </a>
            <a href="https://www.linkedin.com/in/alexander-holiman-8940542a9/" target="_blank">
              <img src={linkedin}/>
            </a>
            <a href="https://github.com/Gitphin" target="_blank">
              <img src={github}/>
            </a>
            <a href="https://leetcode.com/u/DolphinCoding/" target="_blank">
              <img src={leet}/>
            </a>
          </span>
        </contactborder>
    </section>
  );
};

export default Header;
