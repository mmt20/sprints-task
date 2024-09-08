import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignupForm.module.css';
import { notification } from 'antd';
import useLocalStorage from '../hooks/useLocalStorge';

function SignupForm() {
  const navigate = useNavigate();
  const [users, setUsers] = useLocalStorage('users', []);

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    const existingUser = users.find((u) => u.email === values.email);
    if (existingUser) {
      setStatus({ error: 'Email already exists' });
    } else {
      const newUser = {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        password: values.password,
      };
      setUsers([...users, newUser]);
      setStatus({ success: 'Registration successful! You can now log in.' });
      notification.success({
        message: 'Registration Successful',
        description: 'Redirecting to login page...',
      });
      setTimeout(() => navigate('/login'), 2000);
    }
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.fullName) errors.fullName = 'Full name is required';
    if (!values.phone) errors.phone = 'Phone number is required';
    else if (!/^\d{11}$/.test(values.phone))
      errors.phone = 'Invalid phone number. Must be 11 digits.';
    if (!values.email) errors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = 'Invalid email address';
    if (!values.password) errors.password = 'Password is required';
    else if (values.password.length < 8)
      errors.password = 'Password must be at least 8 characters long';
    if (!values.confirmPassword)
      errors.confirmPassword = 'Please confirm your password';
    else if (values.confirmPassword !== values.password)
      errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleSubmit}
      validate={validateForm}
      validateOnBlur={false}
    >
      {({ errors, status, isSubmitting }) => (
        <Form className={styles.form}>
          <h1>Sign Up</h1>

          <Field
            type="text"
            name="fullName"
            placeholder="Full Name"
            className={styles.field}
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

          <Field
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className={styles.field}
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={styles.field}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={styles.field}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={styles.field}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles['submit-button']}
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>

          <p className={styles.link}>
            Already have an account?{' '}
            <Link to="/login" className={styles.error}>
              Log in
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
