import styles from './header.module.css';
import me from '../../assets/header/me.png'
import github from '../../assets/header/github.png'
import resume from '../../assets/header/resume.png'
import linkedin from '../../assets/header/linkedin.png'
import leet from '../../assets/header/leet.png'
import CV from '../../assets/header/AlexanderHolimanResume.pdf'

export const Header = () => {
  return (
    <section id="header" className={styles.container}>
      <box>
      <box2>
      <h1 className="main">Hello, I'm Alek</h1>
      <div><p className="sub">Find my resume and socials below!</p></div>
      <contactborder>
        <span>
          <a href={CV}>
            <img src={resume} alt="Resume" />
          </a>
          <a href="https://www.linkedin.com/in/alexander-holiman-8940542a9/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Gitphin" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://leetcode.com/u/DolphinCoding/" target="_blank" rel="noopener noreferrer">
            <img src={leet} alt="LeetCode" />
          </a>
        </span>
      </contactborder>
      </box2>
      <img className={`${styles.me}`} src={me} alt="Me"/>
      </box>
    </section>
  );
};

export default Header;
