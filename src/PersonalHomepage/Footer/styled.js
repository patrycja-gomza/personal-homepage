import styled from "styled-components";
import { Title, Paragraph } from "../../sharedStyled";

export const StyledFooter = styled.footer`
    max-width: 691px;
    margin-bottom: 109px;
    display: grid;
    grid-template-columns: 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
    }
`;

export const FooterTitle = styled(Title)`
    font-size: ${({ theme }) => theme.fontSize.font32};
    letter-spacing: 1.6px;
    margin: 24px 0;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
        color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.dodgerBlue : color.scienceBlue)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: ${({ theme }) => theme.fontSize.font18};
        letter-spacing: 0.9px;
        margin: 12px 0; 
    }
`;

export const FooterParagraph = styled(Paragraph)`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    font-size: ${({ theme }) => theme.fontSize.font18};
    letter-spacing: 0.9px;
    margin: 0 21px 56px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: ${({ theme }) => theme.fontSize.font14};
        letter-spacing: 0.7px;
        margin: 0 0 40px 0; 
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 48px);
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: repeat(auto-fill, 32px);
    grid-gap: 16px;
    }
`;

export const StyledLogo = styled(({ name, icon, ...props }) => {
    const Logo = icon;
    return <Logo {...props} />;
})`
    path {
        fill: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
        transition: fill 0.3s linear;
    }
    &:hover {
        path {
            fill: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.dodgerBlue : color.scienceBlue)};
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
    }
`; 