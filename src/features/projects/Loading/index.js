import { LoadingSpinner } from './styled';
import { StatusContainer, StatusText } from '../styled';

const Loading = () => (
    <StatusContainer>
        <StatusText>Please wait, projects are being loaded...</StatusText>
        <LoadingSpinner />
    </StatusContainer>
);

export default Loading;