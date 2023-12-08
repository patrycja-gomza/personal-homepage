import { LoadingContainer, LoadingText, LoadingSpinner } from './styled';

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingText>Please wait, projects are being loaded...</LoadingText>
            <LoadingSpinner />
        </LoadingContainer>
    );
};

export default Loading;