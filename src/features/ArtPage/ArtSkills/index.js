import { StyledSection, SectionBody, TileImage, TileImageContainer } from './styled';
import { SectionHeader } from '../../../common/SectionHeader/SectionHeader';
import ModalWindow from '../ModalWindow';
import { useState } from 'react';

const ArtSkills = ({ title, emoji, skills }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setIsModalOpen(false);
    };

    const goToPrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : skills.length - 1));
    };

    const goToNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex < skills.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <StyledSection>
            <SectionHeader>
                {title}
                {" "}
                <img src={emoji} alt="emoji" height="32px" style={{ verticalAlign: 'middle' }} />
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
                    imageUrl={skills[selectedImageIndex].url}
                    onClose={closeModal}
                    onPrev={goToPrevImage}
                    onNext={goToNextImage}
                />
            )}
        </StyledSection>
    );
};

export default ArtSkills;