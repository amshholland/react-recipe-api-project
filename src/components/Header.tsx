import './Header.css';

// import logo from '../public/Logo';

export function Header() {
    return (
        <div className="Header">
            <a href="/">
                <img className="logo" src={ process.env.PUBLIC_URL + '/Logo.png' } alt="Esurient logo" />
            </a>
        </div>
    );

};