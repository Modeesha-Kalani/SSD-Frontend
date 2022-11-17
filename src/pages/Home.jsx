import React from 'react'
import axios from 'axios'
// import Header from '../components/Header'
// import SideNav from '../components/SideNav'

function Home() {
  const getPosts = async () => {
    try {
      //send bearer token to backend
      const res = await axios.get('http://localhost:5000/posts', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')

    //redirect to login page
    window.location.href = '/'
}


  return (
    <div>
      {/* <Header />
      <SideNav /> */}
      <div className="body pt-4">
        <h1>Home</h1>
        <button onClick={() => getPosts()}>get post</button>
        <button onClick={() => logout()}>logout</button>
      </div>

    </div>
  )
}

export default Home
