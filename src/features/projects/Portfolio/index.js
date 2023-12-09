import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as GitHubIcon } from '../../../images/mark-github.svg';
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
import {
    fetchProjects, selectProjects, selectLoading, selectError
} from '../projectsSlice';
import Loading from "../Loading";
import Error from "../Error";

const Portfolio = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    const shortenProjectName = (name) => {
        const words = name.split('-');
        const initials = words.map(word => word.slice(0, 2));
        return initials.join('');
    };

    return (
        <StyledArticle>
            <StyledHeader>
                <GitHubIcon />
                <Title>Portfolio</Title>
                <Subtitle>My recent projects</Subtitle>
            </StyledHeader>
            {loading && <Loading />}
            {error ? (
                <Error />
            ) : (
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
                                            https://{shortenProjectName(project.name)}.demo.com
                                        </Link>
                                    </>
                                )}
                                {project.html_url && (
                                    <>
                                        Code:{" "}
                                        <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                                            https://{shortenProjectName(project.name)}.code.com
                                        </Link>
                                    </>
                                )}
                            </ProjectLinks>
                        </Tile>
                    ))}
                </Wrapper>
            )}
        </StyledArticle>
    );
};

export default Portfolio;