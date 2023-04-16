import './App.css';
import './NameSearch.css'
import './pages/chat.css';
import './SideButtons.css';
import './UserInfo.css';
import './ChatBar.css';

import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2.jsx';
import NameSearch from './pages/NameSearch';

import SideBar from './pages/SideBar.jsx';
import Chat from './pages/Chat.jsx';

import LandingScreen from './pages/LandingScreen.jsx';
import UserInfo from './pages/UserInfo.jsx'
import { AuthContextProvider } from './Firebase/Context';
import ProtectedRoute from './pieces/ProtectedRoute';
import ChatBar from './pages/ChatBar.jsx';

function App() {
  return (
    <AuthContextProvider>  
      <div>
        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/1" element={ <TestPage1/>} />
          <Route path="/2" element={ <TestPage2/>} />
          <Route path="/3" element={ <LandingScreen/>} />
          <Route path="/4" element={ <SideBar/> } />
          <Route path='/5' element={ <UserInfo/>} />
          <Route path='/6' element={ <ChatBar/>} />
          <Route path="/7" element={ <NameSearch/>} />
          <Route
            path="/chatroom"
            element={ 
            
            <ProtectedRoute>
              <Chat/>
            </ProtectedRoute>
          
            }
          />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
