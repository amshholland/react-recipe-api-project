import './Header.css';

// import logo from '../public/Logo';

export function Header() {
    return (
        <a href="/" className="Header">
            <img className="logo" src={ process.env.PUBLIC_URL + '/Logo.png' } alt="Esurient logo" />
        </a>
    );

};