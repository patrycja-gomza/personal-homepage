import styled from "styled-components";

export const Button = styled.button`
    width: fit-content;
    display: inline-flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border: ${({ theme: { darkMode, border } }) => (
        darkMode ? border.borderHeaderDarkMode : border.borderHeader)};
    border-radius: 4px;
    background-color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.dodgerBlue : color.scienceBlue)};
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.font20};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font600};
    line-height: normal;
    letter-spacing: 1px;
    text-decoration: none;
    transition: box-shadow 0.3s linear;
    &:hover {
        box-shadow: ${({ theme: { darkMode, shadow } }) => (
        darkMode ? shadow.shadowButtonHoverDarkMode : shadow.shadowButtonHover)};
    }
    &:active {
        box-shadow: ${({ theme }) => theme.shadow.shadowButtonActive};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: ${({ theme }) => theme.fontSize.font18};
        letter-spacing: 0.9px; 
    }
`;