import { ReactComponent as ListMarker } from '../images/ellipse31.svg';
import personalData from '../personalData.json';
import { StyledSection, SectionHeader, SectionBody, ListItem } from './styled';

const Skills = ({ title, body }) => {
    const skills = personalData[body];

    return (
        <StyledSection>
            <SectionHeader>{title}</SectionHeader>
            <SectionBody>
                {skills.map((skill, index) => (
                    <ListItem key={index}>
                        <ListMarker /> {skill}
                    </ListItem>
                ))}
            </SectionBody>
        </StyledSection>
    );
};

export default Skills;