import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MapContainer from './components/MapContainer';
import PageContainer from './components/PageContainer';
import NotFoundPage from './components/pages/NotFoundPage';


import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <MapContainer/>
            <PageContainer/> 
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
