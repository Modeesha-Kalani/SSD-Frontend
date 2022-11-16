import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();
 
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function sendData(e){

    var validate = validateMessageForm(email, title, message);
    if (validate.valid) {
      //Data object
      const newMessage = {
      
       title,
       message
      };

    axios.post("http://localhost:5000/message/add",newMessage).then(() => {
      Swal.fire(
        'Saving Successful!',
        'Message Saved Successfully!',
        'success'
      ).then(() => {
        window.location = "add";
      });
    }).catch((err) => {
      var msg = "Error";
      var error = "Error";
      error = error.replace("title", "TITLE");
      error = error.replace("message", "MESSAGE");
      msg = error;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msg,
      });
      // console.log(err);
    })
    } else {
    
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: validate.msg,
      });
    }
  }

  const sendEmail = (e) => {

    emailjs.sendForm('service_o0p55f7', 'template_g16ajhh', form.current, '1QqjvRgkC5S3EW7km')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      // window.location.reload()

  }; 
  
  const onClickHandler = (e) => {
    e.preventDefault();

     sendData();
     sendEmail();
     
  }

  function validateMessageForm(email, title , message) {
    if (title.length < 1 || title.length > 30) {
      return {
        valid: false,
        msg: "Title should be between 1 and 30 characters",
      };
    } else if (message.length < 1 || message.length > 100) {
      return { valid: false, msg: "Message should be between 1 and 120 characters" };
    } else if (email.length < 1 || !email.includes("@")) {
      return { valid: false, msg: "Invalid Email" };
    } else {
      return { valid: true, msg: "Valid" };
    }
  }

  return (
    <section>
      <div className="container">
      <h2 className="my-5 text-center">Message Saving</h2>
      <div className="container w-50">
        <form ref={form}  onSubmit={ //ref={form} 
              onClickHandler}>

          <div className="form-group form-label my-3">
            <input
              type="email"
              className="form-control "
              placeholder="Email"
              name="email"
              id="exampleFormControlInput1"
              required
              onChange={(e)=> {
                setEmail(e.target.value);
              }}
            />
          </div>      
        
          <div className="form-group form-label my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              id="exampleFormControlInput2"
              required
              onChange={(e)=> {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group form-label my-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="Message"
              name="message"
              cols="30"
              rows="10"
              id="exampleFormControlTextarea1"
              required
              onChange={(e)=>{
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="form-group form-label text-center">
            <button type="submit" className="btn btn-primary px-4">
              Save
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
  }

export default Contact;
