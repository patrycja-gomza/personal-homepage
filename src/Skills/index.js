import { ReactComponent as ListMarker } from './Ellipse31.svg';
import { StyledSection, SectionHeader, SectionBody, ListItem } from './styled';

const Skills = ({ title, body }) => (
    <StyledSection>
        <SectionHeader>{title}</SectionHeader>
        <SectionBody>
            {body.map((skill, index) => (
                <ListItem key={index}>
                    <ListMarker /> {skill}
                </ListItem>
            ))}
        </SectionBody>
    </StyledSection>
);

export default Skills;