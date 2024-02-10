import { usePersonalData } from '../usePersonalData';
import { ReactComponent as LogoGithub } from '../../../assets/logo-github.svg';
import { ReactComponent as LogoFacebook } from '../../../assets/logo-facebook.svg';
import { ReactComponent as LogoLinkedin } from '../../../assets/logo-linkedin.svg';
import { ReactComponent as LogoInstagram } from '../../../assets/logo-instagram.svg';

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