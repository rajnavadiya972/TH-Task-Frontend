import React, { useState } from "react";
import Input from "../common/Input";
import ButtonComponent from "../common/ButtonComp";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";
    switch (name) {
      case "firstname":
        if (value.trim().length <= 0) {
          errorMsg = "Firstname must be present";
        }
        break;
      case "lastname":
        if (value.trim().length <= 0) {
          errorMsg = "Lastname must be present";
        }
        break;
      case "email":
        const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        const isValidEmail = emailPattern.test(value.trim());
        if (!isValidEmail) {
          errorMsg = "Email is not valid!";
        }
        break;
      case "password":
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const isValidPass = passPattern.test(value.trim());
        if (!isValidPass) {
          errorMsg = "Password must contain '[a-zA-Z1-9]'";
        }
        break;
      case "confPassword":
        if (data.password !== value) {
          errorMsg = "Enter confirm password not match!";
        }
        break;
    }
    setError((error) => {
      return {
        ...error,
        [name]: errorMsg,
      };
    });
  };

  const inputs = [
    {
      name: "firstname",
      type: "text",
      error: error.firstname === "" ? false : true,
      label: "firstname",
      placeholder: "FirstName",
      value: data.firstname,
      errMessage: error.firstname,
    },
    {
      name: "lastname",
      type: "text",
      error: error.lastname === "" ? false : true,
      label: "lastname",
      placeholder: "LastName",
      value: data.lastname,
      errMessage: error.lastname,
    },
    {
      name: "email",
      type: "email",
      error: error.email === "" ? false : true,
      label: "email",
      placeholder: "example@gmail.com",
      value: data.email,
      errMessage: error.email,
    },
    {
      name: "password",
      type: "password",
      error: error.password === "" ? false : true,
      label: "password",
      placeholder: "Password",
      value: data.password,
      errMessage: error.password,
    },
    {
      name: "confPassword",
      type: "password",
      error: error.confPassword === "" ? false : true,
      label: "Confirm Password",
      placeholder: "Confirm Password",
      value: data.confPassword,
      errMessage: error.confPassword,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-blue-100">
        <form
          method="POST"
          action="/user/signup"
          className="p-5 rounded-lg bg-blue-50"
        >
          <p className="justify-center flex text-lg text-blue-600 font-bold">
            SignUp
          </p>
          <div className="flex flex-col justify-around min-h-[75vh] w-[20rem]">
            {inputs.map((input, index) => {
              const {
                type,
                error,
                name,
                label,
                placeholder,
                value,
                errMessage,
              } = input;
              return (
                <div key={index} className="flex flex-col">
                  <Input
                    type={type}
                    error={error}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    value={value}
                  />
                  {error && (
                    <span className="text-xs text-red-700">{errMessage}</span>
                  )}
                </div>
              );
            })}
            <div className="flex justify-start">
              <ButtonComponent type="submit" onChange={handleChange}>
                Submit
              </ButtonComponent>
              <span className=" ml-2 flex my-auto text-sm">
                Already have an account?
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
