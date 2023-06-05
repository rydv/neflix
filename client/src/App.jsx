import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/movies" Component={Home}/>
          <Route path="/series" Component={Home}/>
          <Route path="/register" Component={Register }/>
          <Route path="/login" Component={Login}/>
          <Route path="/watch" Component={Watch}/>
        </Routes>
    </Router>
  // <Home/>
  // <Watch />
  // <Register />
  // <Login />
  )
};

export default App;