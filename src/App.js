import './RtlApp.css';
import NavBar from './components/global/navBar/NavBar';
import SideMenu from './components/global/sideMenu/SideMenu';
import Login from './components/global/login/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
<i class="fas fa-bars"></i>

library.add(faBars)

function App() {
  return (
    <div className="App">
        
      <NavBar />
      <SideMenu />
      <Login />
    </div>
  );
}

export default App;
