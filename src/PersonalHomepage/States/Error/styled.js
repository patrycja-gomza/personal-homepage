import styled from 'styled-components';
import { Button } from "../../../sharedStyled";
import { ReactComponent as ErrorIcon } from '../../images/error-icon.svg';

export const ErrorTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.font24};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: normal;
    letter-spacing: 1.2px;
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    margin: 16px 0 24px;
`;

export const ErrorButton = styled(Button)`
    margin: -16px 0 20px;
`;

export const StyledErrorIcon = styled(ErrorIcon)`
    path {
        stroke: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    }
`;