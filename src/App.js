import logo from './logo.svg';
import './App.css';

import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import TestPage1 from './pages/TestPage1.jsx';
import TestPage2 from './pages/TestPage2.jsx';

import Test from './pages/Test';

import MainPage from './pages/MainPage.jsx';
import { AuthContextProvider } from './Firebase/Context';

import { UserAuth } from './Firebase/Context';

import { auth } from './Firebase/Firebase';

function App() {
  return (
    <AuthContextProvider>
      
      <div>
        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/1" element={ <TestPage1/>} />
          <Route path="/2" element={ <TestPage2/>} />
        </Routes>
      </div>

      
    </AuthContextProvider>
  );
}

export default App;
