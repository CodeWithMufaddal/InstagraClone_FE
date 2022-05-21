import "./App.css";
import Main from "./Components/Home/Main";
import Navbar from "./Components/Home/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider, } from "./Context/UserAuthContext";
function App() {

  return (
    <div className="App ">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Main /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute>
            <Navbar />
            <Main /></ProtectedRoute>} />
          <Route path="/home" element={<Home />} />
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
