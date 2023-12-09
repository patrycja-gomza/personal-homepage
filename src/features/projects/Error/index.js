import { ReactComponent as ErrorIcon } from '../../../images/error-icon.svg';
import { ErrorContainer, ErrorTitle, ErrorText, ErrorButton } from './styled';

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorIcon />
            <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
            <ErrorText>Sorry, failed to load Github projects.<br />You can check them directly on Github.</ErrorText>
            <ErrorButton>Go to Github</ErrorButton>
        </ErrorContainer >
    );
};

export default Error;