"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EyeCloseIcon from "@rsuite/icons/EyeClose";
import VisibleIcon from "@rsuite/icons/Visible";
// import { Button, } from "rsuite";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import { Loader } from 'rsuite';

function Login() {
  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  const router = useRouter();
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //   },

  //   onSubmit: (values) => {},
  // });
  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup.string().min(5).required("Password Required"),
  });

  const navigateUser = () => {
    router.push("/signup");
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setTimeout(() => {
      router.push("/");
    }, 400);
  };
  const style = {
    outline: "black",
  };
  // const Field = ({ error, ...rest }) => {
  //   return (
  //     <Form.Group>
  //       <Input {...rest} className="w-full px-5 py-3 border border-gray-300 rounded-md" />
  //       <Form.ErrorMessage show={!!error} placement="bottomStart" className="text-red-500">
  //         {error}
  //       </Form.ErrorMessage>
  //     </Form.Group>
  //   );
  // };
  return (
    <div>
      <nav className="flex items-center justify-between p-4 w-9/12 m-auto">
        <div className="w-20">
          <Image
            src={"https://www.svgrepo.com/show/487712/referral-2.svg"}
            loading="lazy"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            width={"100"}
            height={"100"}
          />
        </div>
        <div className="flex gap-3">
          <button
            className="px-3 py-1 border border-gray-400 rounded transition-all duration-200 
              hover:bg-gray-200 hover:shadow-xl 
              active:scale-95 active:shadow-md"
            onClick={navigateUser}
          >
            Sign up
          </button>
          <button
            className="px-3 py-1 border border-gray-400 rounded text-white bg-black transition-all duration-200 
              hover:bg-gray-900 hover:shadow-xl 
              active:scale-95 active:shadow-md"
          >
            Contact
          </button>
        </div>
      </nav>

      <div className="flex justify-center m-auto lg:w-3/12 md:w-5/12 w-11/12  mt-3 rounded-xl">
        {/* <Field/> */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full px-10 py-10">
              <div>
                <h2 className="text-center text-2xl font-semibold p-6">
                  Login for R
                </h2>
              </div>

              <h6 className="mt-3 pb-1">Email</h6>
              <Field
                name="email"
                placeholder="Email"
                type="email"
                className="w-full px-5 py-2 border border-gray-300 rounded-md"
                // value={formik.values.email}
                // error={formik.errors.email}
                // onChange={(value) => formik.setFieldValue("email", value)}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error text-red-500 "
              />
              <h6 className="mt-3 pb-1">Password</h6>
              <div
                className="flex border rounded-md"
                style={{ outline: "none !important" }}
              >
                <Field
                  type={visible ? "text" : "password"}
                  name="password"
                  style={{ outlineColor: "none" }}
                  size="md"
                  className="outline-none w-full px-5 py-2 rounded-md"
                />
                <button
                  className="px-3 hover:bg-gray-200"
                  onClick={handleChange}
                >
                  {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error text-red-500 "
              />

              <div className=" w-full pb-6">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className=" text-lg border border-gray-200 w-full p-3 rounded-lg mt-5 bg-black text-white flex gap-3 justify-center transition-all duration-200 
              hover:bg-gray-900 hover:shadow-xl 
              active:scale-95 active:shadow-md"
                >
                  {isSubmitting ? (
                    <div>Loading...</div>
                  ) : (
                    <div>
                      {" "}
                      <i className="ri-mail-fill"></i>
                      Login
                    </div>
                  )}
                </button>
                <p className="mt-3 text-center">
                  {" "}
                  Don't have an account? <Link href="/signup">Sign up</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Login;
