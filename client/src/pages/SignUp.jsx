import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setError("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // body data type must match "Content-Type" header
      });

      const data = await res.json(); // parses JSON response into native JavaScript objects
      setLoading(false);

      if (data === false) {
        setError(true);
        return;
      }

      console.log(data);
    } catch (error) {
      setError(true);

      console.log(error.message);
    }
  };
  return (
    <div className="max-h-screen  mt-10  ">
      <div className="flex   mx-auto flex-col md:flex-row md:items-center gap-1 ">
        <div className=" flex-1 ml-8 items-center p-8 ">
          <img
            className="rounded-3xl w-50 
           hover:scale-110  "
            src="https://images.unsplash.com/photo-1486485764572-92b96f21882a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJsb2d8ZW58MHx8MHx8fDA%3D"
          />
        </div>

        <div className="flex-1">
          <form
            className="flex flex-col  gap-5 max-w-sm"
            onSubmit={handleSubmit}
          >
            <div>
              <label>Your Username</label>
              <TextInput
                type="text"
                placeholder="username"
                id="username"
                onChange={handleOnChange}
              ></TextInput>
            </div>
            <div>
              <label>Your email</label>
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleOnChange}
              ></TextInput>
            </div>
            <div className="relative  ">
              <label>Your password</label>
              <TextInput
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleOnChange}
                placeholder="password"
                className=""
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-9 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-9 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit" className="">
              Sign Up
            </Button>
            <Button
              className="uppercase bg-gradient-to-r from-red-400 via-grren-900 to-pink-200 rounded-lg outline text-white"
              outline
            >
              Continue with Google
            </Button>
          </form>
          <div className="flex text-sm gap-3 mt-2">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-700">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
