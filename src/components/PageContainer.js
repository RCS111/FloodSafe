import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import ReportPage from './pages/ReportPage';
import StatisticsPage from './pages/StatisticsPage';
import ManageRequestPage from './pages/ManageRequestPage';
import NavbarComponent from './components/NarBar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';

const PageContainer = () => {
    return (
    <Router>

      <div className="App">

          <NavbarComponent/>

          <div className = "content">

            <Switch>
                <Route exact path = "/">
                    <HomePage/>
                </Route>
                <Route exact path = "/pages">
                    <HomePage/>
                </Route>
                <Route path = "/pages/request">
                    <RequestPage/>
                </Route>
                <Route path = "/pages/report">
                    <ReportPage/>
                </Route>
                <Route path = "/pages/statistics">
                    <StatisticsPage/>
                </Route>
                <Route path = "/pages/manage">
                    <ManageRequestPage/>
                </Route>
            </Switch>
            
            <FooterComponent/>

          </div>

      </div>

    </Router>
    );
}
 
export default PageContainer;