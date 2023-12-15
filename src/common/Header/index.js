import { useSelector } from 'react-redux';
import profilePhoto from '../../images/pgomza.jpg';
import { usePersonalData } from '../../data/usePersonalData';
import { ReactComponent as EmailIcon } from '../../images/message.svg';
import emojiWoman from "../../images/woman.svg";
import emojiWomanDark from "../../images/woman-dark.svg";
import emojiPc from "../../images/pc.svg";
import { StyledHeader, StyledPhoto, Wrapper } from './styled';
import { Intro, Title, Paragraph, Button } from '../../styles/sharedStyled';
import { selectDarkMode } from '../../features/modes/modesSlice';

const Header = () => {
    const { name, description, email } = usePersonalData();
    const security = { target: '_blank', rel: 'noopener noreferrer' };
    const darkMode = useSelector(selectDarkMode);
    const emojiStyle = { verticalAlign: 'middle', height: '30px' };

    return (
        <StyledHeader>
            <StyledPhoto src={profilePhoto} alt="Patrycja Gomza" />
            <Wrapper>
                <Intro>This is</Intro>
                <Title>{name}</Title>
                <Paragraph>
                    <img src={darkMode ? emojiWomanDark : emojiWoman} alt="emoji" style={emojiStyle} />
                    <img src={emojiPc} alt="emoji" style={emojiStyle} />
                    {" "}
                    {description}
                </Paragraph>
                <Button as="a" href={`mailto:${email}`} title={email} {...security}>
                    <EmailIcon /> Hire Me
                </Button>
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;

