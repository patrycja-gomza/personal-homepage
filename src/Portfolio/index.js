import axios from 'axios';
import { useState, useEffect } from "react";
import { ReactComponent as GitHubIcon } from './mark-github.svg';
import personalData from '../personalData.json';
import {
    StyledArticle,
    StyledHeader,
    Title, Subtitle,
    Wrapper,
    Tile,
    ProjectTitle,
    ProjectDescription,
    ProjectLinks,
    Link
} from './styled';

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
        <StyledArticle>
            <StyledHeader>
                <GitHubIcon />
                <Title>Portfolio</Title>
                <Subtitle>My recent projects</Subtitle>
            </StyledHeader>
            <Wrapper>
                {projects && projects.map((project) => (
                    <Tile key={project.id}>
                        <ProjectTitle>{project.name}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <ProjectLinks>
                            {project.homepage && (
                                <>
                                    Demo: {" "}
                                    <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                                        https://{(project.name)}.demo.com
                                    </Link>
                                </>
                            )}
                            {project.html_url && (
                                <>
                                    Code:{" "}
                                    <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                                        https://{(project.name)}.code.com
                                    </Link>
                                </>
                            )}
                        </ProjectLinks>
                    </Tile>
                ))}
            </Wrapper>
        </StyledArticle>
    );
};

export default Portfolio;