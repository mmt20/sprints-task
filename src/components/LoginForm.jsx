import { Field, Form, Formik } from 'formik';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    localStorage.setItem("username", values.username)
    navigate("/users");
  }
  const handelValidate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  }
  return (
    <Formik initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
      validate={handelValidate}
      validateOnBlur={true}>
      {({ errors }) => (

        <Form className={styles.form}>
          <h1>Welcome</h1>

          <Field type="text" name="username" placeholder="Enter username" className={styles.field} />
          {errors.username && <p className={styles.error}>{errors.username}</p>}



          <Field type="password" name="password" placeholder="************" className={styles.field} />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <input type="submit" value="Submit" className={styles["submit-button"]} />
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
