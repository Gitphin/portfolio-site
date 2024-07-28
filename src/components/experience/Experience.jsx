import React, { useState } from 'react';

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
import postgres from '../../assets/experience/postgres.png';

const skillDescriptions = {
    python: "Python - (Experienced)",
    c: "C - (Experienced)",
    java: "Java - (Advanced)",
    rust: "Rust - (Advanced)",
    cpp: "C++ - (Familiar)",
    dj: "Django - (Advanced)",
    asm: "Assembly - (Familiar)",
    node: "Node.js - (Familiar)",
    sql: "SQL - (Familiar)",
    postman: "Postman - (Familiar)",
    git: "Git - (Advanced)",
    slack: "Slack - (Familiar)",
    jira: "Jira - (Advanced)",
    linux: "Debian/Ubuntu - (Advanced)",
    bash: "Bash scripting - (Familiar)",
    lua: "Lua - (Familiar)",
    react: "React - (Familiar)",
    jscript: "JavaScript - (Familiar)",
    css: "CSS/HTML - (Familiar)",
    ocaml: "OCaml - (Advanced)",
    postgres: "PostgreSQL - (Advanced)"
};

const skillImages = {
    python,
    c,
    java,
    rust,
    asm,
    cpp,
    dj,
    node,
    sql,
    postman,
    git,
    slack,
    jira,
    linux,
    bash,
    lua,
    react,
    jscript,
    css,
    ocaml,
    postgres
};

export const Experience = () => {
    const [description, setDescription] = useState('');

    const handleImageClick = (skill) => {
        setDescription(skillDescriptions[skill]);
    };
    
    return (
        <section id="experience" className={styles.container}>
            <experience>
                <h1 className='main_sub'>My Skills</h1>
                <div className={styles.skillsContainer}>
                    {Object.keys(skillDescriptions).map(skill => (
                        <skimg>
                            <div key={skill} className={styles.skills} onClick={() => handleImageClick(skill)}>
                                <img src={skillImages[skill]} alt={skill} />
                            </div>
                        </skimg>
                    ))}
                </div>
                <dsc>{description && <p className={styles.description}>{description}</p>}</dsc>
            </experience>
        </section>
    );
};

export default Experience;

