import React from 'react';
import Main from "./Components/Home/Main";
import Navbar from "./Components/Home/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider, } from "./Context/UserAuthContext";
import "./App.css";
import Chat from './Components/Chat/Chat';
function App() {

  const location = useLocation();
  console.log("Location --> ", location)


  return (
    <div className="App  ">

      <UserAuthContextProvider>
        <Routes>
          {/* Home Link */}
          <Route path="/" element={<ProtectedRoute> <Navbar /> <Main /> </ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute>
            <Navbar className="_a3gq"/>
            <Main />
          </ProtectedRoute>} />



          {/* Chat Link */}
          <Route path="/direct" element={<ProtectedRoute>

            <Chat />
          </ProtectedRoute>} />


          {/* Explore Link */}
          <Route path="/explore" element={<ProtectedRoute>
            <Navbar />
            <Chat />
          </ProtectedRoute>} />


          {/* Activity Link */}
          <Route path="/activityFeed" element={<ProtectedRoute>
            <Navbar />
            <Chat />
          </ProtectedRoute>} />


          {/* post Link */}
          <Route path="/newPost" element={<ProtectedRoute>
            <Navbar />
            <Chat />
          </ProtectedRoute>} />


          <Route path="/accounts/login" element={<Login />} />
          <Route path="/accounts/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>

    </div>
  );
}

export default App;

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
};
