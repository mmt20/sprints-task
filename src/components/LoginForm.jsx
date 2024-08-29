import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === values.email && storedUser.password === values.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      navigate('/users');
    } else {
      setStatus({ error: 'Invalid email or password' });
    }
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validate={validateForm}
      validateOnBlur={true}
    >
      {({ errors, status, isSubmitting }) => (
        <Form className={styles.form}>
          <h1>Welcome</h1>

          <Field type="email" name="email" placeholder="Email" className={styles.field} />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <Field type="password" name="password" placeholder="Password" className={styles.field} />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <button type="submit" disabled={isSubmitting} className={styles['submit-button']}>
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </button>

          {status && status.error && <p className={styles.error}>{status.error}</p>}

          <p className={styles.link}>
            Don't have an account? <Link to="/signup" >Sign up</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;