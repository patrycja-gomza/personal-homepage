import { ReactComponent as Slider } from '../../images/slider.svg';
import {
    StyledSwitch,
    SwitchIcon,
    SliderWrapper,
    StyledBrightness,
    SwitchText,
    Container,
} from './styled';

const Switch = () => (
    <Container>
        <StyledSwitch>
            <SwitchText>
                Dark mode off
            </SwitchText>

            <SwitchIcon>
                <SliderWrapper>
                    <Slider />
                </SliderWrapper>
                <StyledBrightness />
            </SwitchIcon>
        </StyledSwitch>
    </Container>
);

export default Switch; 
