import profilePhoto from './P.Gomza.jpg';
import personalData from '../personalData.json';

const Header = () => {
    const name = personalData.name;
    const description = personalData.description;
    const email = personalData.email;

    return (
        <header>
            <img src={profilePhoto} alt="Patrycja Gomza" />
            <div>
                <span>THIS IS</span>
                <h1> {name} </h1>
                <p>{description}</p>
                <a href={`mailto:${email}`} title={email}>
                    <button>HIRE ME</button>
                </a>
            </div>
        </header>
    );
};

export default Header;