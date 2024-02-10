import { NavLink } from 'react-router-dom';
import { usePersonalData } from '../usePersonalData';
import { ReactComponent as EmailIcon } from '../images/message.svg';
import emojiWoman from "../images/woman.svg";
import emojiPc from "../images/pc.svg";
import { Intro, Title, Paragraph, Button } from '../../common/sharedStyled';
import {
    StyledHeader,
    StyledPhoto,
    Wrapper,
    PhotoWrapper,
    TextOverlay,
    StyledClickHereIconArt,
    StyledClickHereIconHome
} from './styled';

const Header = ({ to, photo, name, description, isArtPage }) => {
    const { email } = usePersonalData();
    const security = { target: '_blank', rel: 'noopener noreferrer' };
    const emojiStyle = { verticalAlign: 'middle', height: '30px' };

    return (
        <StyledHeader>
            <NavLink to={to} style={{ textDecoration: 'none' }}>
                <PhotoWrapper>
                    <StyledPhoto src={photo} alt="Patrycja Gomza" />
                    {isArtPage ?
                        <StyledClickHereIconArt />
                        :
                        <StyledClickHereIconHome />
                    }
                    <TextOverlay>
                        {isArtPage ?
                            "Back to home page"
                            :
                            "Click here & discover my other side"
                        }
                    </TextOverlay>
                </PhotoWrapper>
            </NavLink>
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

