import styled from "styled-components";

export const SectionHeader = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.font30};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font900};
    line-height: normal;
    letter-spacing: 1.5px;
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    border-bottom: ${({ theme: { darkMode, border } }) => (
        darkMode ? border.borderHeaderDarkMode : border.borderHeader)};
    padding-bottom: 15px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: ${({ theme }) => theme.fontSize.font18};
        letter-spacing: 0.9px;
        padding-bottom: 12px; 
    }
`;