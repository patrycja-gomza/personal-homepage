import styled from "styled-components";

export const Paragraph = styled.p`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.slateGray)};
    font-size: ${({ theme }) => theme.fontSize.font20};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font400};
    line-height: 1.4;
    letter-spacing: 1px;
    margin: 0 0 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: ${({ theme }) => theme.fontSize.font17};
        letter-spacing: 0.85px;
        margin: 0 0 24px; 
    }
`;