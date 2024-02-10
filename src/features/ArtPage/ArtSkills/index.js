import { StyledSection, SectionBody, TileImage, TileImageContainer } from './styled';
import { SectionHeader } from '../../../common/SectionHeader/SectionHeader';

const ArtSkills = ({ title, emoji, skills }) => {
    return (
        <StyledSection>
            <SectionHeader>
                {title}
                {" "}
                <img src={emoji} alt="emoji" height="32px" style={{ verticalAlign: 'middle' }} />
            </SectionHeader>
            <SectionBody>
                {skills.map((skill, index) => (
                    <TileImageContainer key={index}>
                        <TileImage
                            src={skill.url}
                            alt="artskills"
                            orientation={skill.orientation}
                        />
                    </TileImageContainer>
                ))}
            </SectionBody>
        </StyledSection>
    );
};

export default ArtSkills;