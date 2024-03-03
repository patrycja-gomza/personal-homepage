import { useEffect } from 'react';

export const useBodyOverflow = (overflow) => {
    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = overflow;
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [overflow]);
};