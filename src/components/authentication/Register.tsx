import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const registerSchema = yup.object({
  register_email: yup.string().email().required(),
  register_password: yup.string().required().min(4),
  name: yup.string().required().min(3),
  lastname: yup.string().required().min(3),
  phone:
    yup.string().matches(phoneRegExp, 'Phone number is not valid') &&
    yup.number().required(),
  confirm:
    yup
      .string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
      }) && yup.string().required(),
  gender: yup.string().required(),
})

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        middlename: '',
        lastname: '',
        register_email: '',
        register_password: '',
        confirm: '',
        phone: '',
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <div className=" flex flex-row  justify-between">
          <div className="mr-2">
            <Field id="name" name="name">
              {({ field, meta: { touched, error } }) => (
                <input
                  required
                  placeholder="First Name"
                  className={touched && error ? 'invalid' : '' || 'field'}
                  {...field}
                />
              )}
            </Field>
          </div>
          <div className="ml-2">
            <Field id="middlename" name="middlename">
              {({ field, meta: { touched, error } }) => (
                <input
                  placeholder="Middle Name"
                  className={touched && error ? 'invalid' : '' || 'field'}
                  {...field}
                />
              )}
            </Field>
          </div>
        </div>
        <Field id="lastname" name="lastname">
          {({ field, meta: { touched, error } }) => (
            <input
              required
              placeholder="Last Name"
              className={touched && error ? 'invalid' : '' || 'field'}
              {...field}
            />
          )}
        </Field>
        <Field id="register_email" name="register_email">
          {({ field, meta: { touched, error } }) => (
            <input
              required
              placeholder="Email"
              className={touched && error ? 'invalid' : '' || 'field'}
              {...field}
            />
          )}
        </Field>
        <div className=" flex flex-row  justify-between">
          <div className="mr-2">
            <Field
              type="password"
              id="register_password"
              name="register_password"
            >
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
          </div>
          <div className="ml-2">
            <Field id="confirm" name="confirm">
              {({ field, meta: { touched, error } }) => (
                <input
                  required
                  type="password"
                  placeholder="Confirm Password"
                  className={touched && error ? 'invalid' : '' || 'field'}
                  {...field}
                />
              )}
            </Field>
          </div>
        </div>
        <Field type="text" id="phone" name="phone">
          {({ field, meta: { touched, error } }) => (
            <input
              required
              placeholder="Phone Number"
              className={touched && error ? 'invalid' : '' || 'field'}
              {...field}
            />
          )}
        </Field>
        <Field id="gender" name="gender">
          {({ field, meta: { touched, error } }) => (
            <select
              required
              className={
                !touched
                  ? 'Firstoption'
                  : '' || (touched && error)
                  ? 'invalid'
                  : '' || 'field'
              }
              {...field}
              defaultValue={''}
            >
              <option value="" disabled className="hidden">
                Gender
              </option>
              <option value="Male" className="text-black">
                Male
              </option>
              <option value="Female" className="text-black">
                Female
              </option>
              <option value="I prefer not to disclose" className="text-black">
                I prefer not to disclose
              </option>
            </select>
          )}
        </Field>

        <div className="flex flex-row  justify-center ">
          <button type="submit" className="button">
            Register
          </button>
        </div>
        <p className=" my-5 text-center text-base text-black ">
          Already a member ?{' '}
          <a
            href="auth"
            className="text-black focus:text-indigo-500 focus:underline focus:outline-none "
          >
            Sign in
          </a>
          .
        </p>
      </Form>
    </Formik>
  )
}
