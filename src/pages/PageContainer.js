import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import HomePage from './HomePage';
import RequestPage from './RequestPage';
import ReportPage from './ReportPage';
import StatisticsPage from './StatisticsPage';
import ManageRequestPage from './ManageRequestPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SupportPage from './SupportPage';
import MemberPage from './MemberPage';
import NavbarComponent from '../components/NarBar/NavbarComponent';
import FooterComponent from '../components/Footer/FooterComponent';
import FeaturedComponent from '../components/Featured/FeaturedComponent';

const PageContainer = () => {
    let match = useRouteMatch();
    return (
    <Router>
      <div className="App">
        <NavbarComponent match = {match}/>
        <Switch>
            <Route exact path = {`${match.url}/`}>
                <HomePage/>
            </Route>
            <Route path = {`${match.url}/request`}>
                <RequestPage/>
            </Route>
            <Route path = {`${match.url}/report`}>
                <ReportPage/>
            </Route>
            <Route path = {`${match.url}/statistics`}>
                <StatisticsPage/>
            </Route>
            <Route path = {`${match.url}/manage`}>
                <ManageRequestPage/>
            </Route>
            <Route path = {`${match.url}/about`}>
                <AboutPage/>
            </Route>
            <Route path = {`${match.url}/contact`}>
                <ContactPage/>
            </Route>
            <Route path = {`${match.url}/support`}>
                <SupportPage/>
            </Route>
            <Route path = {`${match.url}/member`}>
                <MemberPage/>
            </Route>
        </Switch>
        
        <FeaturedComponent/>
        <FooterComponent match = {match}/>
      </div>
    </Router>
    );
}
 
export default PageContainer;