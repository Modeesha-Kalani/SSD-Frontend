import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavHeader from './Components/NavBar';
import Login from "./pages/Authenticaiton/Login";
import Home from "./pages/Home";
import AddUser from './Components/CreateAccount';

function App() {
    return (
        <>
            <Router>
            <NavHeader />
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    {/* <Route path="/register" exact element={<Register/>} /> */}
                    <Route path="/home" element={<Home/>} />
                    <Route path="/register" element={<AddUser/>} />

                </Routes>
            </Router>
        </>
    );
}

export default App;