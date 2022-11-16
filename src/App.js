import './App.css';
import AddUser from './Components/CreateAccount';
import AddFile from './Components/AddFile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import NavHeader from './Components/NavBar';

function App() {
  return (
    <Router>

<NavHeader />
<Routes>
  
  <Route path="/register" element={<AddUser/>} />
  <Route path="/addFile" element={<AddFile/>} />

</Routes>

</Router>

  );
}

export default App;
