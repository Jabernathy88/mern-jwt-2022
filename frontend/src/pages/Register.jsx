import {useState, useEffect} from 'react'
import FaUser from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const onChange = () => {}

  return 
    <>
      <section className="heading">
        <h1>
          <faUser /> Register New User
        </h1>
        <p>
          Please create an account.
        </p>
      </section>
      <section className="form">
        <div className="form-group">
          <input 
            type="text" 
            className="form-con" 
            id='name' 
            name='name'
            value={name} 
            placeholder='Enter your name' 
            onChange={{onChange}}
          />
        </div>
        <div className="form-group">
          <input 
            type="email"
            className="form-con" 
            id='email'
            name='email'
            value={email} 
            placeholder='Enter your email' 
            onChange={{onChange}}
          />
        </div>
        <div className="form-group">
          <input 
            type="password"
            className="form-control" 
            id='email'
            name='email'
            value={email} 
            placeholder='Enter your name' 
            onChange={{onChange}}
          />
        </div>

      </section>
    </>
}

export default Register