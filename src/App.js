import './RtlApp.css';
import NavBar from './components/global/navBar/NavBar';
import SideMenu from './components/global/sideMenu/SideMenu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
<i class="fas fa-bars"></i>

library.add(faBars)

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideMenu />
    </div>
  );
}

export default App;
