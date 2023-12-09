import { ReactComponent as ErrorIcon } from '../../../images/error-icon.svg';
import { StatusContainer, StatusText } from '../styled';
import { ErrorTitle, ErrorButton } from './styled';

const Error = () => {
    return (
        <StatusContainer>
            <ErrorIcon />
            <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
            <StatusText>
                Sorry, failed to load Github projects.<br />
                You can check them directly on Github.
            </StatusText>
            <ErrorButton>Go to Github</ErrorButton>
        </StatusContainer >
    );
};

export default Error;