import { useEffect } from 'react';
import { ModalOverlay, ModalContent, CloseButton, NavigationButton, EnlargedImage } from './styled';

const ModalWindow = ({ imageUrl, onClose, onPrev, onNext }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  };
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