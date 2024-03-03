import { useEffect, useCallback } from 'react';

export const useKeyPress = (keyPressHandler) => {
    useEffect(() => {
        window.addEventListener('keydown', keyPressHandler);
        return () => {
            window.removeEventListener('keydown', keyPressHandler);
        };
    }, [keyPressHandler]);
};

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