import React, {useState} from 'react'
// import Header from '../../components/Header'
import axios from 'axios';

// function Register() {
//   const [id,setID] = useState("");
//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [mobileNumber,setMobileNumber] = useState("");
//   const [password,setPassword] = useState("");
//   const [password2,setPassword2] = useState("");

//   function sendData(e){
//     e.preventDefault();

//     const newUser = {
//       id:id,
//       name:name,
//       email:email,
//       mobileNumber:mobileNumber,
//       password:password,
//       password2:password2
//     }

//     axios.post('http://localhost:5000/api/user/add',newUser).then(()=>{
//       alert("Registered Successfully")
//       setID("");
//       setName("");
//       setMobileNumber("");
//       setPassword("");
//       setPassword2("");
//       window.location.href = '/';

//     }).catch((err)=>{
//       alert(err.response.data.message)
//       console.log(err)
//     })
//   }

//   return (
//     <>
//     {/* <Header /> */}
//     <div className='container'>
//         <div>
//           <h1>Register</h1>
//       </div>
//       <form onSubmit={sendData}>
//       <div className="form-outline mb-4">
//           <label for='id'>SlIIT ID Number</label><br/>
//           <input type="text" className="form-control" id="name"  placeholder="Student ID / Staff ID" 
//           onChange={(e)=>{
//             setID(e.target.value);
//           }} />
          
//       </div>
      
//       <div className="form-outline mb-4">
//           <label for='name'>Full Name</label><br/>
//           <input type="text" className="form-control" id="name"  placeholder="Enter Your Name as in ID" 
//           onChange={(e)=>{
//             setName(e.target.value);
//           }} />
          
//       </div>

//       <div className="form-outline mb-4">
//           <label for='email'>Email Address</label><br/>
//           <input type="email" className="form-control" id="email"  placeholder="example.my.sliit.lk" 
//           onChange={(e)=>{
//             setEmail(e.target.value);
//           }} />
          
//       </div>

//       <div className="form-outline mb-4">
//           <label for='mobileNumber'>Mobile Number</label><br/>
//           <input type="text" className="form-control" id="mobileNumber"   placeholder="Enter Your Mobile Number" 
//           onChange={(e)=>{
//             setMobileNumber(e.target.value);
//           }} />
          
//       </div>
      
//       <div className="form-outline mb-4">
//           <label for='password'>Password</label><br/>
//           <input type="password" className="form-control" id="password"  placeholder="Enter a Password" 
//           onChange={(e)=>{
//             setPassword(e.target.value);
//           }} />
//       </div>
            
//       <div className="form-outline mb-4">
//           <label for='password2'>Confirm the Password</label><br/>
//           <input type="password" className="form-control" id="password2"  placeholder="Retype the Password" 
//           onChange={(e)=>{
//             setPassword2(e.target.value);
//           }} />
          
//       </div>

//       <div>
//       <button type="submit" class="btn btn-primary">Sign Up</button>
//       </div>

//       <br/>
//       <p>Already have an account? <a href="/">Login</a></p>

//       </form>
//     </div>
//     </>
//   )
// }

// export default Register
