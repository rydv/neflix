import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const user = true;
  return (
    <Router>
        <Routes>
          <Route path="/" Component={user ? Home : Register}/>
          <Route path="/movies" Component={user ? Home : Register}/>
          <Route path="/series" Component={user ? Home : Register}/>
          <Route path="/register" Component={!user ? Register : Home}/>
          <Route path="/login" Component={!user ? Login : Home}/>
          <Route path="/watch" Component={user ? Watch : Register}/>
        </Routes>
    </Router>
  // <Home/>
  // <Watch />
  // <Register />
  // <Login />
  )
};

export default App;