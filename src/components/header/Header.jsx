import styles from './header.module.css';
import me from '../../assets/header/me.png'
import github from '../../assets/header/github.png'
import resume from '../../assets/header/resume.png'
import linkedin from '../../assets/header/linkedin.png'
import leet from '../../assets/header/leet.png'

export const Header = () => {
  return (
    <section id = "header" className={styles.container}>
      <img className={styles.me} src={me}/>
      <h1 className="main">Hello, I'm Alek</h1>
        <p className="sub">Find my resume and socials below!</p>
      <contactborder>
        <span>
            <a href="../../assets/header/AlekHolimanResume.pdf" download>
              <img src={resume} alt="Resume icon" />
            </a>
            <a href="https://www.linkedin.com/in/alexander-holiman-8940542a9/" target="_blank">
              <img src={linkedin} alt="Linkedin icon" />
            </a>
            <a href="https://github.com/Gitphin" target="_blank">
              <img src={github} alt="Github icon" />
            </a>
            <a href="https://leetcode.com/u/DolphinCoding/" target="_blank">
              <img src={leet} alt="LeetCode icon" />
            </a>
          </span>
        </contactborder>
    </section>
  );
};

export default Header;
