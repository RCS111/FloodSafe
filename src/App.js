import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import MainWrapper from './MainWrapper'
import MapContainer from './components/Map/MapContainer';
import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import ReportPage from './pages/ReportPage';
import StatisticsPage from './pages/StatisticsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage.js';
import SupportPage from './pages/SupportPage';
import MemberPage from './pages/MemberPage.js';
import NotFoundPage from './pages/NotFoundPage';

import './components/Buttons.css';
import './index.css';
import { amber, blue } from '@material-ui/core/colors';
import LogInPage from './pages/LogInPage';
import { useState } from 'react';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  const [credential, setCredential] = useState(null);
  const [sensorLocation, setSensorLocation] = useState(null);

  return (
    <ThemeProvider theme = {theme}>
        {credential == null ? 
            <LogInPage setCredential = {setCredential}/> : 
            <Router>
            <MainWrapper credential = {credential} setCredential = {setCredential} sensorLocation = {sensorLocation} setSensorLocation = {setSensorLocation}>
              <Switch>
                <Route exact path = "/">
                  <HomePage/>
                </Route>
                <Route exact path = "/home">
                  <HomePage/>
                </Route>
                <Route exact path = "/reports">
                  <ReportPage/>
                </Route>
                <Route exact path = "/statistics">
                  <StatisticsPage/>
                </Route>
                {
                  credential != null ?
                  <Route exact path = "/request">
                    <RequestPage/>
                  </Route> :
                  null
                }
                <Route path = "/maps">
                  <MapContainer/>
                </Route>
                <Route exact path = "/about">
                  <AboutPage/>
                </Route>
                <Route exact path = "/contact">
                  <ContactPage/>
                </Route>
                <Route exact path = "/support">
                  <SupportPage/>
                </Route>
                <Route exact path = "/member">
                  <MemberPage/>
                </Route>
                <Route path = "*">
                  <NotFoundPage/>
                </Route>
              </Switch>
            </MainWrapper>
            </Router>
        }
    </ThemeProvider>
  );
}

export default App;
