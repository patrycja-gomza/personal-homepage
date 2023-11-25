const Skills = ({ title, body }) => (
    <section>
        <header>{title}</header>
        <body>
            {body.map((skill, index) => (
                <li key={index}>
                    {skill}
                </li>
            ))}
        </body>
    </section>
);

export default Skills;