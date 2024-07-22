import React from 'react';

import styles from './footer.module.css';
import github from '../../assets/footer/github.png'

export const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <footer>
        <p>Portfolio made by Alek Holiman</p>
        <a href="https://github.com/Gitphin/portfolio-site" target="_blank">
              <img src={github} alt="Github icon" />
            </a>
      </footer>
    </section>
  );
}

export default Footer;