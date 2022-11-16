import React from 'react'
import './css/login.css'

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
  return (

    <div className="d-flex justify-content-center align-items-center login-contatiner">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="login-form">
                <h2 className="text-center">Login</h2>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" required="required" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <hr />
                <p>Login via</p>
                {/* //google button */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Log in with Google</button>
                </div>
                {/* //facebook button */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Log in with Facebook</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
