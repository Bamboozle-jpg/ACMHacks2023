import './App.css';

import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2.jsx';
import SideBar from './pages/SideBar.jsx';

import LandingScreen from './pages/LandingScreen';

import MainPage from './pages/MainPage.jsx';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2.jsx';
import SideBar from './pages/SideBar.jsx';

import { AuthContextProvider } from './Firebase/Context';

function App() {
  return (
    <AuthContextProvider>  
      <div>
        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/1" element={ <TestPage1/>} />
          <Route path="/2" element={ <TestPage2/>} />
          <Route path="/3" element={ <LandingScreen/>} />
          <Route path="/5" element={ <SideBar/> } />
          <Route path="/3" element={ <LandingScreen/>} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
