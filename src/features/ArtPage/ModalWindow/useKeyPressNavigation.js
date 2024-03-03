import { useCallback } from 'react';

export const useKeyPressNavigation = (onPrev, onNext, onClose) => {
    return useCallback((event) => {
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
    }, [onPrev, onNext, onClose]);
};