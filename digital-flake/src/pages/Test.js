import React from "react";
import { useFormInputValidation } from "react-form-input-validation";
import "./Test.css";

const Test = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      email: "",
      password: "",
    },
    {
      email: "required|email",
      password: "required",
    }
  );

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      // console.log(fields, errors);
      // Perform api call here
    }
  };
  return (
    <>
      <div>
        <h3>React Form Input Validation - validate</h3>
        <form
          className="myForm"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <p>
            <label>
              email
              <input
                type="text"
                name="email"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.email}
              />
            </label>
            <label className="error">{errors.email ? errors.email : ""}</label>
          </p>

          <p>
            <label>
              ajinath
              <input
                type="text"
                name="password"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.password}
                data-attribute-name="password"
              />
            </label>
            <label className="error">
              {errors.password ? errors.password : ""}
            </label>
          </p>

          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Test;
