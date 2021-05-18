import { Link, useRouteMatch } from 'react-router-dom';
import "./FooterComponent.css";

const FooterComponent = ({match}) => {
    return (
        <div className = 'footer image'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-12 col-sm-3'>
                        <Link to = {`${match.url}/about`}>ABOUT</Link>
                    </div>
                    <div className = 'col-12 col-sm-3'>
                        <Link to = {`${match.url}/contact`}>CONTACT</Link>
                    </div>
                    <div className = 'col-12 col-sm-3'>
                        <Link to = {`${match.url}/support`}>SUPPORT</Link>
                    </div>
                    <div className = 'col-12 col-sm-3'>
                        <Link to = {`${match.url}/member`}>MEMBER</Link>
                    </div>
                </div>
            </div>
            <div className = 'container'>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h2>FloodSafe</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>2021 FloodSafe. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FooterComponent;