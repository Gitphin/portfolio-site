import styles from './projects.module.css';
import github from '../../assets/footer/github.png'


const project_data = [
    {   image: github,
        link: "https://github.com/Gitphin/portfolio-site",
        title: 'My Website',
        skills: ['React', 'CSS', 'HTML', 'JavaScript', 'Vite'],
        description: "This project is the website you are on right now! I used HTML, CSS, JavaScript, React, and everything was done by scratch with no tutorials! I will keep this updated.",
    },

    {   
        image: github,
        link: "https://github.com/Gitphin/midas_lang",
        title: 'Midas Lang',
        skills: ['Rust', 'ASM', 'Java'],
        description: "This is my attempt at learning more about Rust while making my own language! I have made a basic lexer/parser and AST while following the book 'Crafting Interpreters'. This is still a WIP and will keep progressing."
    },

    {   
        image: github,
        link: "https://github.com/Gitphin/capy-ai",
        title: 'Capy AI',
        skills: ['Python', 'GroqAI', 'Flask', 'React', 'JavaScript', 'Three.js'],
        description: "This is my take on the AI chatbot, but instead it is talking to a capybara. I made this to learn more about AI and integrating it with Flask. I also wanted to challenge myself by using Three.js as a base.",
    },

    {   
        image: github,
        link: "https://github.com/Gitphin/nvim-configuration",
        title: 'Neovim Config',
        skills: ['Lua', 'Bash', 'Linux'],
        description: "Although not really a project, I have started using Neovim instead of VSCode since switching to Linux as my main OS. I have since customized my config using Lua to be completely personalized to my coding style. I love the light-weight efficiency it provides!"
    },

    {   
        image: github,
        link: "https://github.com/Gitphin/box-it",
        title: 'Box-It',
        skills: ['Python', 'PyQt, Pathlib/os'],
        description: "This is a Python script/app I made with PyQt to help me organize my computer better! It has drag/drop support for file uploads, and ability to customize folder names and locations.",
    },

    {   
        image: github,
        link: "https://github.com/Gitphin/mini_projects",
        title: 'Mini Projects',
        skills: ['Python', 'CSS', 'HTML', 'Random'],
        description: "These are very random, not great quality projects that I made and remembered to push to GitHub. Most of these programs are coded using Python, but I think one of them is your standard To-Do app using CSS/HTML.",
    },
];


export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <projects>
                <h1 className='main_sub'>Projects</h1>
                    <projcontain>
                        {project_data.map((project) => (
                        <container className="project">
                            <a href={project.link}>
                                <img src={project.image} />
                            </a>
                            <h3 className= "sub">{project.title}</h3>
                            <ul className= "skills-list">
                            {project.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                            </ul>
                            <p>{project.description}</p>
                        </container>
                        ))}
                    </projcontain>                 
            </projects>
        </section>
    );
}

export default Projects;
