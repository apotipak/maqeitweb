import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Todo from "./views/todoPage";
import CreatePage from "./views/createPage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/protectedPage";

//import logo from './logo.svg';
import './App.css';
import './Style1.css';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          
          <Switch>
            <PrivateRoute component={ProtectedPage} path="/protected" exact />
            <PrivateRoute component={CreatePage} path="/create" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Register} path="/register" />
            <Route component={Todo} path="/todo" />            
            <Route component={Home} path="/" />
          </Switch>

        </AuthProvider>

      </div>
    </Router>
  );
}

export default App;


