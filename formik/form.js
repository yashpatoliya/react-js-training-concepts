import { useFormik } from "formik";
import validationSchema from "./validationSchema";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  date: "",
  message: "",
};

const Form = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div onSubmit={handleSubmit} sx={{width : '400px'}} >
      <form id="contact">
        <h3>Inficial Contact Form</h3>
        <h4>Contact us for custom quote</h4>
        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            required
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            type="email"
            required
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number"
            type="tel"
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Password"
            type="password"
            required
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Confirm Password"
            type="password"
            required
            name='confirm_password'
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </fieldset>
        <fieldset>
          <input
            type="date"
            required
            name='date'
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            required
            name='message'
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
        <p className="copyright">
          Designed by{" "}
          <a href="https://inficial.com" target="_blank" title="Colorlib">
            Inficial
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
