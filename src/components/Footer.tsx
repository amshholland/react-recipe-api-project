import './Footer.css';

export function Footer() {
    return (
        <div className="Footer">
            <h4>Contributors</h4>
            <div className="contributor">
                <a className="link" href="https://github.com/anthonyabrignani" ><img src={ process.env.PUBLIC_URL + '/GitHub-Mark-32px.png' } className="GHLogo" alt="Link to Anthony Abrignani's GitHub" />@anthonyabrignani</a>
            </div>
            <div className="contributor">
                <a className="link" href="https://github.com/amshholland"><img src={ process.env.PUBLIC_URL + '/GitHub-Mark-32px.png' } className="GHLogo" alt="Link to Amber Holland's GitHub" />@amshholland</a>
            </div>
            <div className="contributor">
                <a className="link" href="https://github.com/PunchesC"><img src={ process.env.PUBLIC_URL + '/GitHub-Mark-32px.png' } className="GHLogo" alt="Link to Curtis Punches's GitHub" />@PunchesC</a>
            </div>
        </div>
    );
}