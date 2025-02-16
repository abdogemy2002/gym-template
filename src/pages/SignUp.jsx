import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom' // For redirecting after signup
import Footer from '../components/Footer'
import '../style/SignUp.css'

const SignUp = ({ setUser }) => {
  const navigate = useNavigate() // Hook for redirection

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Make the request to create a user
        const response = await axios.post('http://localhost:3000/users', values)
    
        // Check if the response status is within the success range (200–299)
        if (response.status >= 200 && response.status < 300) {
          toast.success('Account created successfully!', {
            position: 'top-right',
            autoClose: 3000,
          })
    
          // Save the username to localStorage and update the user state
          localStorage.setItem('username', response.data.username)
          setUser(response.data.username)
    
          // Redirect to the home page after successful signup
          navigate('/')
        } else {
          // If the response status is not in the success range
          throw new Error('Failed to create account')
        }
      } catch (error) {
        console.error('Error creating account:', error)
    
        // Display the error toast
        toast.error('Failed to create account. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
        })
      }
    },
    
  })

  return (
    <div>
      <div className="signup-container">
        <ToastContainer /> {/* Toast notifications */}
        <div className="signup-content">
          {/* Image Section */}
          <div className="signup-image">
            {/* You can add an image here if needed */}
          </div>

          {/* Form Section */}
          <div className="signup-box">
            <h2 className="signup-heading">Create Your Account</h2>
            <form onSubmit={formik.handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>

              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
