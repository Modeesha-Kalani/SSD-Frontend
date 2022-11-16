import React from 'react'
import './css/login.css'
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {

  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      //check user name and password is empty or not
      if (user.email === '' || user.password === '') {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please fill all the fields!',
        })
      } else {
        const res = await axios.post('http://localhost:5001/login', user)
        if (res.data.status === true) {
          //get data form access token
          const token = res.data.accessToken
          const refreshToken = res.data.refreshToken
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const decodedData = JSON.parse(window.atob(base64));

          //set data to local storage
          //if token is exisit then remove it
          if (localStorage.getItem('token')) {
            localStorage.removeItem('token')
          }
          //if refresh token is exisit then remove it
          if (localStorage.getItem('refreshToken')) {
            localStorage.removeItem('refreshToken')
          }
          //if user is exisit then remove it
          if (localStorage.getItem('user')) {
            localStorage.removeItem('user')
          }

          localStorage.setItem('token', token)
          localStorage.setItem('refreshToken', refreshToken)
          localStorage.setItem('user', JSON.stringify(decodedData.user1))

          //redirect to home page
          window.location.href = '/home'
        }
        else {
          Swal.fire(
            'Login Failed',
            res.data.message,
            'error'
          )
        }
      }
    } catch (err) {
      console.log(err)
    }

  }
  return (

    <div className="d-flex justify-content-center align-items-center login-contatiner">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="login-form">
                <h2 className="text-center">Login</h2>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" name="email" required="required" onChange={e => handleChange(e)} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" name="password" required="required" onChange={e => handleChange(e)} />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block" onClick={() => handleSubmit()}>Log in</button>
                </div>
                <hr />
                {/* <p>Login via</p> */}
                {/* //google button */}
                {/* <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Log in with Google</button>
                </div> */}
                {/* //facebook button */}
                {/* <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Log in with Facebook</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
