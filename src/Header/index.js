import profilePhoto from './pgomza.jpg';
import personalData from '../personalData.json';
import { ReactComponent as EmailIcon } from './message.svg';
import { StyledHeader, StyledPhoto, Wrapper, Intro, Title, Paragraph, Button } from './styled';

const Header = () => {
    const name = personalData.name;
    const description = personalData.description;
    const email = personalData.email;

    return (
        <StyledHeader>
            <StyledPhoto src={profilePhoto} alt="Patrycja Gomza" />
            <Wrapper>
                <Intro>This is</Intro>
                <Title>{name}</Title>
                <Paragraph>{description}</Paragraph>
                <Button href={`mailto:${email}`} title={email}>
                    <EmailIcon /> Hire Me
                </Button>
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;