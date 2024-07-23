import styles from './projects.module.css';
import github from '../../assets/footer/github.png'

{/* PROJECTS IS A WORK IN PROGRESS */}
export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <projects>
                <h1 className='main_sub'>Projects (WIP) </h1>
                <a href="https://github.com/Gitphin" target="_blank">
                <img src={github} alt="Github icon" />
                </a>
            </projects>
        </section>
    );
}

export default Projects;
