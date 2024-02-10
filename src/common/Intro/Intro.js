import styled from "styled-components";

export const Intro = styled.span`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.slateGray)};
    font-size: ${({ theme }) => theme.fontSize.font12};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: 1.3;
    text-transform: uppercase;
`;