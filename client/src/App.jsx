import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { Navigate } from 'react-router-dom';

const App = () => {
  const {user} = useContext(AuthContext) ;
  return (
    <Router>
        <Routes>
          <Route path="/" Component={user ? Home : Login}/>
          <Route path="/movies" Component={user ? Home : Login}/>
          <Route path="/series" Component={user ? Home : Login}/>
          <Route path="/register" Component={!user ? Register : Home}/>
          <Route path="/login" Component={!user ? Login : Home}/>
          <Route path="/watch" Component={user ? Watch : Register}/>
        </Routes>
    </Router>
  )
};

export default App;