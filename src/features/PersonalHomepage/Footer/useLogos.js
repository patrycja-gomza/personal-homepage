import personalData from '../personalData.json';
import { ReactComponent as LogoGithub } from '../../../assets/logo-github.svg';
import { ReactComponent as LogoFacebook } from '../../../assets/logo-facebook.svg';
import { ReactComponent as LogoLinkedin } from '../../../assets/logo-linkedin.svg';
import { ReactComponent as LogoInstagram } from '../../../assets/logo-instagram.svg';

export const useLogos = () => {
    const logos = [
        { link: personalData.github, name: "github", icon: LogoGithub },
        { link: personalData.facebook, name: "facebook", icon: LogoFacebook },
        { link: personalData.linkedin, name: "linkedin", icon: LogoLinkedin },
        { link: personalData.instagram, name: "instagram", icon: LogoInstagram }
    ];

    return logos;
};