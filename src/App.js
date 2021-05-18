import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import MapContainer from './components/Map/MapContainer';
import PageContainer from './pages/PageContainer';
import NotFoundPage from './pages/NotFoundPage';

import './components/Buttons.css';
import './index.css';
import SectionContainer from './SectionContainer';

function App() {
  const history = useHistory();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <SectionContainer/>
          </Route>
          <Route path = "/maps">
            <MapContainer/>
          </Route>
          <Route path = "/pages">
            <PageContainer/>
          </Route>
          <Route path = "*">
            <NotFoundPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
