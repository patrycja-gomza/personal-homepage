import { useEffect } from 'react';
import { ModalOverlay, ModalContent, CloseButton, NavigationButton, EnlargedImage } from './styled';
import { useKeyPressNavigation } from './useKeyPressNavigation';
import { useBodyOverflow } from './useBodyOverflow';

const ModalWindow = ({ imageUrl, onClose, onPrev, onNext }) => {
  useBodyOverflow('hidden');

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyPress = useKeyPressNavigation(onPrev, onNext, onClose);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onPrev, onNext, onClose]);


  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <NavigationButton onClick={onPrev} style={{ left: '10px' }}>{'<'}</NavigationButton>
        <EnlargedImage src={imageUrl} alt="enlarged" />
        <NavigationButton onClick={onNext} style={{ right: '10px' }}>{'>'}</NavigationButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalWindow;