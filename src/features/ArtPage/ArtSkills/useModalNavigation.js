import { useState, useCallback } from 'react';

export const useModalNavigation = (items) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback((index) => {
        setSelectedItemIndex(index);
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedItemIndex(null);
        setIsModalOpen(false);
    }, []);

    const goToPrevItem = useCallback(() => {
        setSelectedItemIndex(
            (prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1)
        );
    }, [items]);

    const goToNextItem = useCallback(() => {
        setSelectedItemIndex(
            (prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0)
        );
    }, [items]);

    return {
        selectedItemIndex,
        isModalOpen,
        openModal,
        closeModal,
        goToPrevItem,
        goToNextItem,
    };
};