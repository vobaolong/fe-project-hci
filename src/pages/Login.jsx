import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { loginUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required !"),
  password: yup.string().required("Password is required !"),
});

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      navigate("/");
    },
  });
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="email"
                  id="email"
                  name="email"
                  label="Email Address *"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                <span className="error">
                  {formik.touched.email && formik.errors.email}
                </span>
                <CustomInput
                  type="password"
                  name="password"
                  label="Password *"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <span className="error">
                  {formik.touched.password && formik.errors.password}
                </span>
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        className="me-2"
                        type="checkbox"
                        name="lsRememberMe"
                      />
                      <label>Remember me</label>
                    </div>
                    <Link
                      className="text-decoration-underline"
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0 col-12" type="submit">
                      Login
                    </button>
                    <p>
                      Don't have an account? &nbsp;
                      <Link to="/signup" className="fw-bolder">
                        Sign up for free
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
