import './RtlApp.css'; 
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom'
import NavBar from './components/global/navBar/NavBar';
import SideMenu from './components/global/sideMenu/SideMenu';
import Login from './components/global/login/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


library.add(faBars)

function App() {
  return (
    <div className="App">
        
      <NavBar />
      <SideMenu />

      <BrowserRouter>
        <Route path="/logIn" component={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
