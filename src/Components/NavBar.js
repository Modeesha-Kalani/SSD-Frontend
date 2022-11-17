import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavHeader() {
  //get user type form local storage
  const user = localStorage.getItem("user");
  
  //if user exists get user type
  var userType = "";
  if (user) {
    userType = JSON.parse(user).type;
    console.log(userType);
  }
  // console.log(userType);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SaveIt</Navbar.Brand>
        <Nav className="me-auto">
          
          {/* <Nav.Link href="/">Login</Nav.Link> */}
          {userType == "admin" || userType == "manager" || userType == "worker" ?  <Nav.Link href="/home">Home</Nav.Link> : null}
          {userType == "admin" ?  <Nav.Link href="/register">Register</Nav.Link> : null}
          {userType == "admin" || userType == "manager" ?  <Nav.Link href="/addFile">Add File</Nav.Link> : null}
          {userType == "admin" || userType == "manager" || userType == "worker" ?  <Nav.Link href="/sendMessage">Send Message</Nav.Link> : null}
    
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
