import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from '../../images/loading-icon.svg';

export const LoadingSpinner = styled(LoadingIcon)`
	path {
    	stroke: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.dodgerBlue : color.scienceBlue)};
    }
    && {
        animation: rotate 1s linear infinite;
        animation-delay: 0.5s;
        transform-origin: center;
            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        }
`;
