import personalData from '../../personalData.json';
import { Intro } from "../../styles/sharedStyled";
import { StyledFooter, FooterTitle, FooterParagraph, Wrapper, StyledLogo } from './styled';
import { ReactComponent as EmojiHand } from '../../images/hand-fingers-crossed.svg';

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
                    <StyledLogo name="github" />
                </a>
                <a href={facebook} title={facebook} {...security}>
                    <StyledLogo name="facebook" />
                </a>
                <a href={linkedin} title={linkedin} {...security}>
                    <StyledLogo name="linkedin" />
                </a>
                <a href={instagram} title={instagram} {...security}>
                    <StyledLogo name="instagram" />
                </a>
            </Wrapper>
        </StyledFooter>
    );
};

export default Footer;