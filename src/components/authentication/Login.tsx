import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(3),
})

export const LoginForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={loginSchema}
    onSubmit={async (values) => {
      // await fetch('http://localhost:8080/refresh_token', {
      //   method: 'POST',
      //   credentials: 'include',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // })
      // await fetch('http://localhost:8080/login', {
      //   method: 'POST',
      //   credentials: 'include',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: new URLSearchParams(values),
      // }).then((response) => {
      //   response.json().then((data) => {
      //     setToken(data.Atoken)
      //   })
      // })
    }}
  >
    <Form>
      <div className="flex flex-row justify-between">
        <label className="label" htmlFor="Email">
          Email *
        </label>
      </div>
      <Field id="email" name="email">
        {({ field, meta: { touched, error } }) => (
          <input
            required
            type="email"
            placeholder="Email"
            className={touched && error ? 'invalid' : '' || 'field'}
            {...field}
          />
        )}
      </Field>
      <div className="flex flex-row justify-between">
        <label className="label" htmlFor="Password">
          Password *
        </label>
      </div>
      <Field type="password" id="password" name="password">
        {({ field, meta: { touched, error } }) => (
          <input
            required
            type="password"
            placeholder="Password"
            className={touched && error ? 'invalid' : '' || 'field'}
            {...field}
          />
        )}
      </Field>
      <a
        href="#!"
        className="text-base text-gray-400 underline underline-offset-1 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none dark:hover:text-indigo-300"
      >
        Forgot password?
      </a>
      <div className="flex flex-row  justify-center ">
        <button type="submit" className="button">
          Login
        </button>
      </div>
    </Form>
  </Formik>
)
