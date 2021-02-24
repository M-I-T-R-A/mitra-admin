import SideBar from './Drawer.js';
import Login from './Login'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin" component={SideBar}></Route>
          <Route path="" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
