import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const signupSchema = yup.object({
  name: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Email Should Be Valid")
    .required("Email is required"),
  mobile: yup.string().required("Mobile No is required"),
  password: yup.string().required("Password is required"),
});
const Signup = () => {
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  // const handleShowHide = () => {
  //   setShow(!show);
  // };
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="text"
                  name="name"
                  label="User Name *"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  onBur={formik.handleBlur("name")}
                />
                <div className="error">
                  {formik.touched.name && formik.errors.name}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  label="Email Address *"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="mobile"
                  label="Phone Number *"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBur={formik.handleBlur("mobile")}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  label="Password *"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                  <button className="button border-0 col-12">Sign Up</button>
                  <p>
                    Already have an account? &nbsp;
                    <Link to="/login" className="fw-bolder">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
