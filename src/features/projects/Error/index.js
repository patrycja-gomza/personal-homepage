import { ReactComponent as ErrorIcon } from '../../../images/error-icon.svg';

const Error = () => {
    return (
        <div>
            <ErrorIcon />
            <p>Ooops! Something went wrong...</p>
            <span>Sorry, failed to load Github projects.<br />You can check them directly on Github.</span>
            <button>Go to Github</button>
        </div >
    );
};

export default Error;