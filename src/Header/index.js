import profilePhoto from '../images/pgomza.jpg';
import personalData from '../personalData.json';
import { ReactComponent as EmailIcon } from '../images/message.svg';
import emojiWoman from "../images/woman.svg";
import emojiPc from "../images/pc.svg";
import { StyledHeader, StyledPhoto, Wrapper, Intro, Title, Paragraph, Button } from './styled';

const Header = () => {
    const name = personalData.name;
    const description = personalData.description;
    const email = personalData.email;
    const security = { target: '_blank', rel: 'noopener noreferrer' };

    return (
        <StyledHeader>
            <StyledPhoto src={profilePhoto} alt="Patrycja Gomza" />
            <Wrapper>
                <Intro>This is</Intro>
                <Title>{name}</Title>
                <Paragraph>
                    <img src={emojiWoman} alt="emoji" height="30px" style={{ verticalAlign: 'middle' }} />
                    <img src={emojiPc} alt="emoji" height="30px" style={{ verticalAlign: 'middle' }} />
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

