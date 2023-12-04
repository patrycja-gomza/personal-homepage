import personalData from '../../personalData.json';
import { Intro } from "../../styled";
import { StyledFooter, FooterTitle, FooterParagraph, Wrapper } from './styled';
import { ReactComponent as EmojiHand } from '../../images/hand-fingers-crossed.svg';
import { ReactComponent as LogoGithub } from '../../images/logo-github.svg';
import { ReactComponent as LogoFacebook } from '../../images/logo-facebook.svg';
import { ReactComponent as LogoLinkedin } from '../../images/logo-linkedin.svg';
import { ReactComponent as LogoInstagram } from '../../images/logo-instagram.svg';

const Footer = () => {
    const email = personalData.email;
    const github = personalData.github;
    const facebook = personalData.facebook;
    const linkedin = personalData.linkedin;
    const instagram = personalData.instagram;
    const contactInvitation = personalData.contactInvitation;
    const security = { target: '_blank', rel: 'noopener noreferrer' };

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
                <a href={github} title={github} {...security}>
                    <LogoGithub />
                </a>
                <a href={facebook} title={facebook} {...security}>
                    <LogoFacebook />
                </a>
                <a href={linkedin} title={linkedin} {...security}>
                    <LogoLinkedin />
                </a>
                <a href={instagram} title={instagram} {...security}>
                    <LogoInstagram />
                </a>
            </Wrapper>
        </StyledFooter>
    );
};

export default Footer;