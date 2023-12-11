import { ReactComponent as ListMarker } from '../../images/ellipse31.svg';
import personalData from '../../personalData.json';
import { StyledSection, SectionBody, ListItem } from './styled';
import { SectionHeader } from '../../sharedStyled';

const Skills = ({ title, emoji, body }) => {
    const skills = personalData[body];

    return (
        <StyledSection>
            <SectionHeader>
                {title}
                {" "}
                <img src={emoji} alt="emoji" height="32px" style={{ verticalAlign: 'middle' }} />
            </SectionHeader>
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