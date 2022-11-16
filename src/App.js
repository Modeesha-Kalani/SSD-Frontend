import './App.css';
import AddUser from './Components/CreateAccount';
import AddFile from './Components/AddFile';
import SendMessage from './Components/Contact';
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
  <Route path="/sendMessage" element={<SendMessage/>} />

</Routes>

</Router>

  );
}

export default App;
