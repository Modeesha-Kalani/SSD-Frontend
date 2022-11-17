import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/App.css";
import AddFile from './Components/AddFile';
import SendMessage from './Components/Contact';
import AddUser from './Components/CreateAccount';

import NavHeader from './Components/NavBar';
import Login from "./pages/Authenticaiton/Login";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <NavHeader />
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    {/* <Route path="/register" exact element={<Register/>} /> */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<AddUser />} />
                    <Route path="/addFile" element={<AddFile />} />
                    <Route path="/sendMessage" element={<SendMessage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;