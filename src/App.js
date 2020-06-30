import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { Header } from './components/Header';
import Home from './pages/Home';
import Course from './pages/Course';
import Login from './pages/Login';
import './App.css';
import { AuthContext } from './context/Auth';

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Header />
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/course" component={Course} />
        <Route path="/login" component={Login} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
