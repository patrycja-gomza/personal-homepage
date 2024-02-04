import { Link } from 'react-router-dom';
import profilePhoto from '../images/pgomza.jpg';
import { usePersonalData } from '../usePersonalData';
import { ReactComponent as EmailIcon } from '../images/message.svg';
import emojiWoman from "../images/woman.svg";
import emojiPc from "../images/pc.svg";
import { StyledHeader, StyledPhoto, Wrapper } from './styled';
import { Intro, Title, Paragraph, Button } from '../../sharedStyled';

const Header = () => {
    const { name, description, email } = usePersonalData();
    const security = { target: '_blank', rel: 'noopener noreferrer' };
    const emojiStyle = { verticalAlign: 'middle', height: '30px' };

    return (
        <StyledHeader>
            <Link to="/art">
                <StyledPhoto src={profilePhoto} alt="Patrycja Gomza" />
            </Link>
            <Wrapper>
                <Intro>This is</Intro>
                <Title>{name}</Title>
                <Paragraph>
                    <img src={emojiWoman} alt="emoji" style={emojiStyle} />
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

