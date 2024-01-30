import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import Input from "../../common/Input";
import ButtonComponent from "../../common/ButtonComp";
import { signUp } from "../../../services/authService";

const Signup = () => {
  const navigate = useNavigate();

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

  const isError = () => {
    const { firstname, lastname, email, password, confPassword } = error;
    if (
      firstname === "" &&
      lastname === "" &&
      email === "" &&
      password === "" &&
      confPassword === ""
    ) {
      return false;
    }
    return true;
  };

  const isNull = () => {
    const { firstname, lastname, email, password, confPassword } = data;
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      confPassword === ""
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNull()) {
      toast.error("Please fill all the values!")
    }
    if (!isError() && !isNull()) {
      const res = await signUp(data);
      if (!res.error) {
        toast.success(res.message)
        navigate("/login");
      } else {
        toast.error(res.error)
      }
    }
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
          errorMsg = "Entered confirm password not match!";
        }
        break;
      default:
        errorMsg = "Error!";
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
      helperText: error.firstname,
      label: "firstname",
      placeholder: "FirstName",
      value: data.firstname,
    },
    {
      name: "lastname",
      type: "text",
      error: error.lastname === "" ? false : true,
      helperText: error.lastname,
      label: "lastname",
      placeholder: "LastName",
      value: data.lastname,
    },
    {
      name: "email",
      type: "email",
      error: error.email === "" ? false : true,
      helperText: error.email,
      label: "email",
      placeholder: "example@gmail.com",
      value: data.email,
    },
    {
      name: "password",
      type: "password",
      error: error.password === "" ? false : true,
      helperText: error.password,
      label: "password",
      placeholder: "Password",
      value: data.password,
    },
    {
      name: "confPassword",
      type: "password",
      error: error.confPassword === "" ? false : true,
      helperText: error.confPassword,
      label: "Confirm Password",
      placeholder: "Confirm Password",
      value: data.confPassword,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] bg-blue-100">
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
                helperText
              } = input;
              return (
                <div key={index} className="flex flex-col">
                  <Input
                    helperText={helperText}
                    type={type}
                    error={error}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    value={value}
                  />
                </div>
              );
            })}
            <div className="flex justify-start">
              <ButtonComponent type="button" onClick={handleSubmit}>
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
        <Toaster />
      </div>
    </>
  );
};

export default Signup;
