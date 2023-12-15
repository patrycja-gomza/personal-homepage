import styled from "styled-components";
import { Title, Paragraph } from "../../styles/sharedStyled";
import { ReactComponent as LogoGithub } from '../../images/logo-github.svg';
import { ReactComponent as LogoFacebook } from '../../images/logo-facebook.svg';
import { ReactComponent as LogoLinkedin } from '../../images/logo-linkedin.svg';
import { ReactComponent as LogoInstagram } from '../../images/logo-instagram.svg';

export const StyledFooter = styled.footer`
    max-width: 691px;
    margin-bottom: 109px;
    display: grid;
    grid-template-columns: 1fr;
`;

export const FooterTitle = styled(Title)`
    font-size: ${({ theme }) => theme.fontSize.font32};
    letter-spacing: 1.6px;
    margin: 24px 0;
    text-decoration: none;
`;

export const FooterParagraph = styled(Paragraph)`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    font-size: ${({ theme }) => theme.fontSize.font18};
    letter-spacing: 0.9px;
    margin: 0 21px 56px 0;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 48px);
    grid-gap: 24px;
`;

const logos = {
    github: LogoGithub,
    facebook: LogoFacebook,
    linkedin: LogoLinkedin,
    instagram: LogoInstagram
};

export const StyledLogo = styled(({ name, ...props }) => {
    const Logo = logos[name];
    return <Logo {...props} />;
})`
    path {
        fill: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
        }
`;