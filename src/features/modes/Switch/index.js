import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Slider } from '../../../images/slider.svg';
import {
    StyledSwitch,
    SwitchIcon,
    SliderWrapper,
    StyledBrightness,
    SwitchText,
    Container,
} from './styled';
import { selectDarkMode, toggleDarkMode } from '../modesSlice';

const Switch = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);

    return (
        <Container>
            <StyledSwitch onClick={() => dispatch(toggleDarkMode())}>
                <SwitchText>
                    Dark mode {darkMode ? "on" : "off"}
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
};

export default Switch; 
