import axios from 'axios';
import { useState, useEffect } from "react";
import { ReactComponent as GitHubIcon } from './mark-github.svg';
import personalData from '../personalData.json';

const Portfolio = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(personalData.githubAPI_URL);
                const data = response.data;

                setProjects(data);
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
            }
        })();
    }, []);

    return (
        <article>
            <header>
                <GitHubIcon />
                <h2>Portfolio</h2>
                <p>My recent projects</p>
            </header>
            <div>
                {projects && projects.map((project) => (
                    <div key={project.id}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div>
                            {project.homepage && (
                                <>
                                    Demo:{" "}
                                    <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                        {project.homepage}
                                    </a>
                                </>
                            )}
                            {project.html_url && (
                                <>
                                    Code:{" "}
                                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                        {project.html_url}
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default Portfolio;