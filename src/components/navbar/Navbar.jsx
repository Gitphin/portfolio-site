import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';

export const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [toggleText, setToggleText] = useState(false);
    const [active, setActive] = useState("#");
  
    const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
      setToggleText(true);
      setTimeout(() => setToggleText(false), 500);
    };
  
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [darkMode]);

    return (
      <section id="navbar" className={styles.container}>
        <nav>
        <span className={`${styles.toggleIcon}`} onClick={toggleDarkMode}>
        {darkMode ? '🌙' : '🌞'}
      </span>
          <a
            onClick={() => setActive("#")}
            className={active === "#" ? "active" : ""}
            href="#"
          >
            Home
          </a>
          <a
            onClick={() => setActive("#about")}
            className={active === "#about" ? "active" : ""}
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setActive("#experience")}
            className={active === "#experience" ? "active" : ""}
            href="#experience"
          >
            Experience
          </a>
          <a
            onClick={() => setActive("#projects")}
            className={active === "#projects" ? "active" : ""}
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </section>
    );
}

export default Navbar;