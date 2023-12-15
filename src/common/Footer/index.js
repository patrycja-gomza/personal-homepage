import { usePersonalData } from '../../data/usePersonalData';
import { Intro } from "../../styles/sharedStyled";
import { StyledFooter, FooterTitle, FooterParagraph, Wrapper, StyledLogo } from './styled';
import { ReactComponent as EmojiHand } from '../../images/hand-fingers-crossed.svg';
import { ReactComponent as LogoGithub } from '../../images/logo-github.svg';
import { ReactComponent as LogoFacebook } from '../../images/logo-facebook.svg';
import { ReactComponent as LogoLinkedin } from '../../images/logo-linkedin.svg';
import { ReactComponent as LogoInstagram } from '../../images/logo-instagram.svg';

const Footer = () => {
    const { email, github, facebook, linkedin, instagram, contactInvitation } = usePersonalData();
    const security = { target: '_blank', rel: 'noopener noreferrer' };

    const logos = [
        { link: github, name: "github", icon: LogoGithub },
        { link: facebook, name: "facebook", icon: LogoFacebook },
        { link: linkedin, name: "linkedin", icon: LogoLinkedin },
        { link: instagram, name: "instagram", icon: LogoInstagram }
    ];

    return (
        <StyledFooter>
            <Intro>Let's talk!</Intro>

            <FooterTitle as="a" href={`mailto:${email}`} title={email} {...security}>
                {email}
            </FooterTitle>

            <FooterParagraph>
                {contactInvitation}
                <EmojiHand style={{ verticalAlign: 'middle' }} />
            </FooterParagraph>

            <Wrapper>
                {logos.map(logo => (
                    <a key={logo.name} href={logo.link} title={logo.link} {...security}>
                        <StyledLogo name={logo.name} icon={logo.icon} />
                    </a>
                ))}
            </Wrapper>
        </StyledFooter>
    );
};

export default Footer;