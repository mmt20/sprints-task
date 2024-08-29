import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignupForm.module.css';

function SignupForm() {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    // Here you would typically make an API call to register the user
    // For this example, we'll just store the user in localStorage
    localStorage.setItem('user', JSON.stringify(values));
    setStatus({ success: 'Registration successful! You can now log in.' });
    setSubmitting(false);
    setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.fullName) errors.fullName = 'Full name is required';
    if (!values.phone) errors.phone = 'Phone number is required';
    else if (!/^\d{11}$/.test(values.phone)) errors.phone = 'Invalid phone number. Must be 11 digits.';
    if (!values.email) errors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Invalid email address';
    if (!values.password) errors.password = 'Password is required';
    else if (values.password.length < 8) errors.password = 'Password must be at least 8 characters long';
    if (!values.confirmPassword) errors.confirmPassword = 'Please confirm your password';
    else if (values.confirmPassword !== values.password) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  return (
    <Formik
      initialValues={{ fullName: '', phone: '', email: '', password: '', confirmPassword: '' }}
      onSubmit={handleSubmit}
      validate={validateForm}
      validateOnBlur={false}
    >
      {({ errors, status, isSubmitting }) => (
        <Form className={styles.form}>
          <h1>Sign Up</h1>

          <Field type="text" name="fullName" placeholder="Full Name" className={styles.field} />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

          <Field type="tel" name="phone" placeholder="Phone Number" className={styles.field} />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <Field type="email" name="email" placeholder="Email" className={styles.field} />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <Field type="password" name="password" placeholder="Password" className={styles.field} />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <Field type="password" name="confirmPassword" placeholder="Confirm Password" className={styles.field} />
          {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}

          <button type="submit" disabled={isSubmitting} className={styles['submit-button']}>
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>

          {status && status.success && <p className={styles.success}>{status.success}</p>}

          <p className={styles.link}>
            Already have an account? <Link to="/login" className={styles.error}>Log in</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;