import './NavLinks.css';

import { Link } from "react-router-dom";

export default function NavLinks() {
    return (
        <div className="NavLinks">
            <Link className="navLink" to="/favorites">Favorite Recipes</Link>
            <Link className="navLink" to="/login">Login</Link>
        </div>
    );
};