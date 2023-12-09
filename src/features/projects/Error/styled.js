import styled from 'styled-components';
import { Button, Paragraph } from "../../../styled";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 20px;
`;

export const ErrorTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.font24};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: normal;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.color.mineShaft};
    margin: 16px 0 24px;
`;

export const ErrorText = styled(Paragraph)`
    color: ${({ theme }) => theme.color.mineShaft};
    margin: 0 0 48px;
    text-align: center;
`;

export const ErrorButton = styled(Button)`
    margin: -16px 0 20px;
`;