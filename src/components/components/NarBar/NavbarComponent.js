import { Link } from 'react-router-dom';

import "./NavBarComponent.css"

const NavbarComponent = () => {
    return (
        <nav className = "navbar">
            <h1>Flood Safe</h1>

            <div className = "links">
                
                {1 && <Link to = "/pages/">Home</Link>}
                {1 && <Link to = "/pages/request">Request</Link>}
                {1 && <Link to = "/pages/report">Reports</Link>}
                {1 && <Link to = "/pages/statistics">Statistics</Link>}
                {1 && <Link to = "/pages/manage">Management</Link>}

            </div>
        </nav>
    );
}
 
export default NavbarComponent;