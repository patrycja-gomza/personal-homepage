import { usePersonalData } from '../usePersonalData';
import { Intro } from "../../../common/Intro/Intro";
import { StyledFooter, FooterTitle, FooterParagraph, Wrapper, StyledLogo } from './styled';
import { ReactComponent as EmojiHand } from '../../../assets/hand-fingers-crossed.svg';
import { useLogos } from './useLogos';

const Footer = () => {
    const { email, contactInvitation } = usePersonalData();
    const logos = useLogos();
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