import { Link, useRouteMatch } from 'react-router-dom';

import "./NavBarComponent.css"

const NavbarComponent = ({match}) => {
    return (
        <nav className = "navbar">
            <Link to = "/">
                <img src = 'logo_floodsafe.png' height = '50px'/>
            </Link>
            <h1>Flood Safe</h1>

            <div className = "links">
                {1 && <Link to = {`${match.url}/`}>Home</Link>}
                {1 && <Link to = {`${match.url}/request`}>Request</Link>}
                {1 && <Link to = {`${match.url}/report`}>Reports</Link>}
                {1 && <Link to = {`${match.url}/statistics`}>Statistics</Link>}
                {1 && <Link to = {`${match.url}/manage`}>Management</Link>}
            </div>
        </nav>
    );
}
 
export default NavbarComponent;