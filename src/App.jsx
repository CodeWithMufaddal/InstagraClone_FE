import React, { useState } from 'react';
import Main from "./Components/Home/Main";
import Navbar from "./Components/Home/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";
import Chat from './Components/Chat/Chat';
import { useUserAuth } from "./Context/UserAuthContext";
import LoadingBar from 'react-top-loading-bar'
import Profile from './Components/Profile/Profile';

function App() {

  const location = useLocation();

  const { progress, user } = useUserAuth();

  return (
    <div className="App  ">
      <LoadingBar
        color='linear-gradient(to right , #8a3ab9, #cd486b, #fccc63)'
        progress={progress}
      />
      <Routes>
        {/* Home Link */}
        <Route path="/" element={<ProtectedRoute>

          <Main />
        </ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute>
          <Main />
        </ProtectedRoute>} />



        {/* Chat Link */}
        <Route path="/direct" element={<ProtectedRoute>
          <div className="" style={{
            height: "100%"
            , width: "100%"
            , position: "fixed"
          }}>

            <div className="_a3gq" style={{ height: '100%' }}>
              <section className="_9-dc _9zq6">
                <div className="_9zq7">
                  <Navbar />
                  <Chat />
                </div>
              </section>
            </div>
          </div>
        </ProtectedRoute>} />


        <Route path="/profile" element={<ProtectedRoute>
          <div className="" style={{
            height: "100%"
            , width: "100%"
            , position: "fixed"
          }}>

            <div className="_a3gq" style={{ height: '100%' }}>
              <section className="_9-dc _9zq6">
                <div className="_9zq7">
                  <Navbar />
                  <Profile />
                </div>
              </section>
            </div>
          </div>



        </ProtectedRoute>} />

        <Route path="/accounts/login" element={<Login />} />
        <Route path="/accounts/signup" element={<SignUp />} />
      </Routes>

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
