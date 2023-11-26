import { ReactComponent as ListDotIcon } from './Ellipse31.svg';

const Skills = ({ title, body }) => (
    <section>
        <header>{title}</header>
        <body>
            {body.map((skill, index) => (
                <li key={index}>
                    <ListDotIcon />
                    {skill}
                </li>
            ))}
        </body>
    </section>
);

export default Skills;