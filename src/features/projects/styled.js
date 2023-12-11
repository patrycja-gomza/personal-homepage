import styled from 'styled-components';
import { Paragraph } from "../../sharedStyled";

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 20px;
`;

export const StatusText = styled(Paragraph)`
    color: ${({ theme }) => theme.color.mineShaft};
    margin: 0 0 48px;
    text-align: center;
`;