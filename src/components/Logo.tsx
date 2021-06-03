import './Logo.css';

export function Logo() {
    return (
        <a href="/" className="Logo">
            <img className="logo" src={ process.env.PUBLIC_URL + '/Logo.png' } alt="Esurient logo" />
        </a>
    );
};