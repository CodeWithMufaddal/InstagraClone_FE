import './App.css';
import Main from './Components/Home/Main';
import Navbar from './Components/Home/Navbar';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App ">
      <div className="navContainerHight">
        <div className="NavbarContainer">

          <Navbar />
        </div>
      </div>

      <Main />

    </div>
  );
}

export default App;
