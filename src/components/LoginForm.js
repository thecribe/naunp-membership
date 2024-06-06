"use client";

import { loginHandler } from "@/app/utils/FormSubmission";
import { formValidation } from "@/app/utils/InputValidation";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const LoginForm = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [formInput, setFormInput] = useState({
    email: {
      input: "",
      errorMessage: "",
    },
    password: {
      input: "",
      errorMessage: "",
    },
  });

  const handleSubmit = () => {
    let output = formValidation.email(formInput.email.input);

    if (output && formInput.password.input.length < 1) {
      setFormInput({
        ...formInput,
        password: {
          ...formInput.password,
          errorMessage: "Enter a valid password",
        },
      });
      return null;
    } else if (!output) {
      setFormInput({
        ...formInput,
        email: {
          ...formInput.email,
          errorMessage: "Invalid e-mail",
        },
      });
      return null;
    }

    setFormInput({
      ...formInput,
      password: {
        ...formInput.password,
        errorMessage: "",
      },
      email: {
        ...formInput.email,
        errorMessage: "",
      },
    });

    loginHandler(formInput.email.input, formInput.password.input);
  };

  return (
    <Fragment>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-sm px-3">E-mail:</p>
          <input
            type="text"
            name="user-email"
            id="user_email"
            placeholder="Enter your email address"
            value={formInput.email.input}
            onChange={(e) =>
              setFormInput({
                ...formInput,
                email: { ...formInput.email, input: e.target.value },
              })
            }
            className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
          />
          <p className="text-xs text-red-500">{formInput.email.errorMessage}</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between px-3">
            <p className="text-sm ">Password:</p>
            <p
              className="text-xs"
              onMouseEnter={() => setPasswordView(true)}
              onMouseLeave={() => setPasswordView(false)}
            >
              eye
            </p>
          </div>
          <input
            type={`${passwordView ? "text" : "password"}`}
            name="password"
            id="password"
            placeholder="Enter Password"
            value={formInput.password.input}
            onChange={(e) =>
              setFormInput({
                ...formInput,
                password: { ...formInput.email, input: e.target.value },
              })
            }
            className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
          />
        </div>
        <Link href="#" className="text-xs text-purple-800">
          Forgot password?
        </Link>
        <button
          disabled={
            !(
              formInput.email.input.length > 0 &&
              formInput.password.input.length > 0
            )
          }
          className="text-sm bg-blue-950 rounded-md p-3 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm disabled:scale-[1] disabled:bg-gray-100 disabled:text-gray-200 disabled:shadow-none"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </div>
    </Fragment>
  );
};

export default LoginForm;
