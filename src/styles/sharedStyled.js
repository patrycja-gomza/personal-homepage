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

export const Title = styled.h1`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    font-size: ${({ theme }) => theme.fontSize.font38};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font900};
    line-height: normal;
    letter-spacing: 1.9px;
    margin: 12px 0 35px;
`;

export const Paragraph = styled.p`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.slateGray)};
    font-size: ${({ theme }) => theme.fontSize.font20};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font400};
    line-height: 1.4;
    letter-spacing: 1px;
    margin: 0 0 32px;
`;

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
`;

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
`;
