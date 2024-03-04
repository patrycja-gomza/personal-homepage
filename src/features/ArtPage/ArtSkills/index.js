import { StyledSection, SectionBody, TileImage, TileImageContainer } from './styled';
import { SectionHeader } from '../../../common/SectionHeader/SectionHeader';
import ModalWindow from '../ModalWindow';
import { useModalNavigation } from './useModalNavigation';

const ArtSkills = ({ title, emoji, skills }) => {
    const {
        selectedItemIndex,
        isModalOpen,
        openModal,
        closeModal,
        goToPrevItem,
        goToNextItem,
    } = useModalNavigation(skills);

    return (
        <StyledSection>
            <SectionHeader>
                {title}
                {" "}
                <img
                    src={emoji}
                    alt="emoji"
                    height="32px"
                    style={{ verticalAlign: 'middle' }}
                />
            </SectionHeader>
            <SectionBody>
                {skills.map((skill, index) => (
                    <TileImageContainer
                        key={index}
                        onClick={() => openModal(index)}
                    >
                        <TileImage
                            src={skill.url}
                            alt="artskills"
                            orientation={skill.orientation}
                        />
                    </TileImageContainer>
                ))}
            </SectionBody>

            {isModalOpen && (
                <ModalWindow
                    imageUrl={skills[selectedItemIndex].url}
                    onClose={closeModal}
                    onPrev={goToPrevItem}
                    onNext={goToNextItem}
                />
            )}
        </StyledSection>
    );
};

export default ArtSkills;