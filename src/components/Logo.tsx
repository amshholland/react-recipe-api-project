import './Logo.css';

export function Logo() {
    return (
        <div className="Logo">
            <a href="/" >
                <img className="logo" src={ process.env.PUBLIC_URL + '/Logo.png' } alt="Esurient logo" />
            </a>
        </div>
    );
};