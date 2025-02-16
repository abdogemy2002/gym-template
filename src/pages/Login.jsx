import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../style/Login.css'; // You can reuse the same CSS as the signup page

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Simulate the login request
        const response = await axios.post('http://localhost:3000/users', values);
        
        // On successful login
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 3000,
        });
        
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('userLoggedIn', 'true');
        setUser(response.data.username);
        navigate('/');
      } catch (error) {
        console.error('Error logging in:', error);
        toast.error('Failed to login. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    },
  });

  return (
    <div>
      <div className="login-container">
        <ToastContainer />
        <div className="login-content">
          {/* Image Section */}
          <div className="login-image">
            {/* You can add an image here if needed */}
          </div>

          {/* Form Section */}
          <div className="login-box">
            <h2 className="login-heading">Login to Your Account</h2>
            <form onSubmit={formik.handleSubmit} className="login-form">
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

              <button type="submit" className="login-btn">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
