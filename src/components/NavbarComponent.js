import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <nav className = "navbar">
            <img src="logo512.png" height="40" width="40" alt="FloodSafe"/>
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