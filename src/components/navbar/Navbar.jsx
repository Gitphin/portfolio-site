import { useState } from "react";
import styles from './navbar.module.css';

export const Navbar = () => {
    const [active, setActive] = useState("#");

    return (
      <section id="navbar" className={styles.container}>
        <nav>
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