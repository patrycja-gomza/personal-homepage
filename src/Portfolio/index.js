import { ReactComponent as GitHubIcon } from './mark-github.svg';
import personalData from '../personalData.json';

const Portfolio = () => {
    return (
        <article>
            <header>
                <GitHubIcon />
                <h2>Portfolio</h2>
                <p>My recent projects</p>
            </header>

            <body>
                tiles - GitHub
            </body>
        </article>
    );
};

export default Portfolio;