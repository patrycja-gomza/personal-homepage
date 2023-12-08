import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from '../../../images/loading-icon.svg';
import { Paragraph } from "../../../styled";

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 20px;
`;

export const LoadingText = styled(Paragraph)`
    color: ${({ theme }) => theme.color.mineShaft};
    margin: 0 0 48px;
`;

export const LoadingSpinner = styled(LoadingIcon)`
    animation: rotate 1s linear infinite;
    animation-delay: 0.5s; // Dodaj opóźnienie
    transform-origin: center;
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
    }
    
`;