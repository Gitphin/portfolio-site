import styles from './experience.module.css';
import python from '../../assets/experience/python.png';
import c from '../../assets/experience/c.png';
import java from '../../assets/experience/java.png';
import rust from '../../assets/experience/rust.png';
import asm from '../../assets/experience/asm.png';
import cpp from '../../assets/experience/cplus.png';
import dj from '../../assets/experience/django.png';
import node from '../../assets/experience/node.png';
import sql from '../../assets/experience/sql.png';
import postman from '../../assets/experience/postman.png';
import git from '../../assets/experience/git.png';
import slack from '../../assets/experience/slack.png';
import jira from '../../assets/experience/jira.png';
import linux from '../../assets/experience/linux.png';
import bash from '../../assets/experience/bash.png';
import lua from '../../assets/experience/lua.png';
import react from '../../assets/experience/react.png';
import jscript from '../../assets/experience/jscript.png';
import css from '../../assets/experience/css.png';
import ocaml from '../../assets/experience/ocaml.png';
import ruby from '../../assets/experience/ruby.png';
export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <experience className={styles.experience}>
            <h1 className='main_sub'>My Skills</h1>
                <div className={styles.skillsContainer}>
                    <skills className={styles.skills}><img src={python} ></img></skills>
                    <skills className={styles.skills}><img src={c}></img></skills>
                    <skills className={styles.skills}><img src={java}></img></skills>
                    <skills className={styles.skills}><img src={rust}></img></skills>
                    <skills className={styles.skills}><img src={cpp}></img></skills>
                    <skills className={styles.skills}><img src={dj}></img></skills>
                    <skills className={styles.skills}><img src={asm}></img></skills>
                    <skills className={styles.skills}><img src={node}></img></skills>
                    <skills className={styles.skills}><img src={sql}></img></skills>
                    <skills className={styles.skills}><img src={postman}></img></skills>
                    <skills className={styles.skills}><img src={git}></img></skills>
                    <skills className={styles.skills}><img src={slack}></img></skills>
                    <skills className={styles.skills}><img src={jira}></img></skills>
                    <skills className={styles.skills}><img src={linux}></img></skills>
                    <skills className={styles.skills}><img src={bash}></img></skills>
                    <skills className={styles.skills}><img src={lua}></img></skills>
                    <skills className={styles.skills}><img src={react}></img></skills>
                    <skills className={styles.skills}><img src={jscript}></img></skills>
                    <skills className={styles.skills}><img src={css}></img></skills>
                    <skills className={styles.skills}><img src={ocaml}></img></skills>
                    <skills className={styles.skills}><img src={ruby}></img></skills>
                </div>
            </experience>
        </section>
    );
}

export default Experience;
