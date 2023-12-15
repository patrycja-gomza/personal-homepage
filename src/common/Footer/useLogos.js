import { usePersonalData } from '../../data/usePersonalData';
import { ReactComponent as LogoGithub } from '../../images/logo-github.svg';
import { ReactComponent as LogoFacebook } from '../../images/logo-facebook.svg';
import { ReactComponent as LogoLinkedin } from '../../images/logo-linkedin.svg';
import { ReactComponent as LogoInstagram } from '../../images/logo-instagram.svg';

export const useLogos = () => {
    const { github, facebook, linkedin, instagram } = usePersonalData();

    const logos = [
        { link: github, name: "github", icon: LogoGithub },
        { link: facebook, name: "facebook", icon: LogoFacebook },
        { link: linkedin, name: "linkedin", icon: LogoLinkedin },
        { link: instagram, name: "instagram", icon: LogoInstagram }
    ];

    return logos;
};