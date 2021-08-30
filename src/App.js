import './RtlApp.css'; 
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom'

// libraries 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


// routs
import NavBar from './components/global/navBar/NavBar';
import SideMenu from './components/global/sideMenu/SideMenu';
import Login from './components/login/Login';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

library.add(faBars)

function App() {
  return (
    <div className="App">
        
      <NavBar />
      <SideMenu />

      <BrowserRouter>
        <Route path="/logIn" component={Login}/>
        <Route path="/ForgetPassword" component={ForgetPassword}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
