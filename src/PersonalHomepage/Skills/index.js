import { StyledSection, SectionBody, ListItem, StyledListMarker } from './styled';
import { SectionHeader } from '../../sharedStyled';

const Skills = ({ title, emoji, skills }) => {
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
                        <StyledListMarker /> {skill}
                    </ListItem>
                ))}
            </SectionBody>
        </StyledSection>
    );
};

export default Skills;