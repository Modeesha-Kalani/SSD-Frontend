import React, {useState} from 'react';
import axios from 'axios';
import '../createAccount.css';
import Swal from 'sweetalert2'

export default function CreateAccount(){
 
    const [name, setName] = useState("");
    const [nic, setNIC] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [emp_id, setEmpID] = useState("");
    const [type, setType] = useState("");


      function sendData(e){
          e.preventDefault();

          if(validateForm(name, email, nic, phone, emp_id, type)){
          //Data object
          const newUser = {
              name,
              nic,
              email,
              phone,
              emp_id,
              type
          }

        axios.post('http://localhost:5000/user/', newUser).then(()=>{
          Swal.fire(
            'Registration Successful!',
            'Employee Registred Successfully!',
            'success'
          ).then(()=>{
            window.location = "/add";
          })

          }).catch((err) =>{
            var error = "Error";
            var msg ="Error";
            error = err.response.data.error;
            if(error.includes("emp_id_1 dup key")){
              msg = "Employee ID already exists";
            }else if(error.includes("email_1 dup key")){
              msg = "Email already exists";
            }else if(error.includes("nic_1 dup key")){
              msg = "NIC already exists";
            }else{
              error = error.replace("nic", "NIC");
              error = error.replace("email", "Email");
              error = error.replace("name", "Name");
              error = error.replace("emp_id", "Employee ID");
              error = error.replace("phone", "Phone");
              error = error.replace("type", "Type");
              msg = error;
            }
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg,
              })
              console.log(err.response.data.error);
          });
        }
        
  }

function validateForm(name, email, nic, phone, emp_id, type) {
  if(name.length < 3 || name.length > 30){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Name should be between 3 and 30 characters',
    })
    return false;
  }else if(nic.length < 10 || nic.length > 12){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid NIC',
    })
    return false;
  }else if(email.length < 1 || !email.includes("@")){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid Email',
    })
    return false;
  }else if(phone.length < 10 || phone.length > 10 || isNaN(phone)){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid phone number',
    })
    return false;
  }else if(emp_id.length < 6 || emp_id.length > 20){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Employee ID should be between 6 and 20 characters',
    })
    return false;
  }else if(type.length === 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid Employee Type',
    })
    return false;
  }else{
    return true;
  }
}

    return(

    <div className="auth-wrapper">
      <div className="auth-inner">
        <form  autocomplete="off" onSubmit={sendData}>
        <h3>Create Account</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            required
            role='presentation'
            onChange={(e) =>{
                setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>NIC Number</label>
          <input type="text" 
            className="form-control" 
            placeholder="Enter NIC" 
            required
            role='presentation'
            onChange={(e) =>{
                setNIC(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            required
            role='presentation'
            onChange={(e) =>{
                setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter Phone Number"
            required
            role='presentation'
            onChange={(e) =>{
                setPhone(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Employee ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Employee ID"
            required
            role='presentation'
            onChange={(e) =>{
                setEmpID(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Employee Type</label>
            <select className="form-select emp-select" required 
            onChange={(e) =>{
                setType(e.target.value);
            }}
            >
                <option selected disabled >Select Employee Type</option>
                <option value="manager">Manager</option>
                <option value="worker">Worker</option>
            </select>
        </div>
        <div className="d-grid" id="reg_btn">
          <button type="submit" className="btn btn-primary" id="btn_reg">
            REGISTER
          </button>
        </div>
      </form>
      </div>
   </div>
      
    )
}