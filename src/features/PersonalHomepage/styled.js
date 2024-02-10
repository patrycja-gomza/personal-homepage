import styled from 'styled-components';
import { Paragraph } from "../../common/Paragraph/Paragraph";

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 20px;
`;

export const StatusText = styled(Paragraph)`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    margin: 0 0 48px;
    text-align: center;
`;