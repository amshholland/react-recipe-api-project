import './Header.css';

export function Header() {
    return (
        <a href="/" className="Header">
            <img className="logo" src={ process.env.PUBLIC_URL + '/Logo.jpg' } alt="Esurient logo" />
        </a>
    );

};