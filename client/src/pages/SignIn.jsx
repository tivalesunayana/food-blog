import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(error);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setError("Please fill out all fields.");
    }
    try {
      setLoading(true);

      setError(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        return setError(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="max-h-screen  mt-10  ">
      <div className="flex   mx-auto flex-col md:flex-row md:items-center gap-1 ">
        <div className=" flex-1 ml-8 items-center p-8 ">
          <img
            className="rounded-3xl w-50 
               hover:scale-110 
            
            "
            src="https://images.unsplash.com/photo-1486485764572-92b96f21882a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJsb2d8ZW58MHx8MHx8fDA%3D"
          />
        </div>

        <div className="flex-1">
          <form
            className="flex flex-col  gap-5 max-w-sm"
            onSubmit={handleSubmit}
          >
            {/* <div>
              <label>Your Username</label>
              <TextInput
                type="email"
                placeholder="username"
                id="username"
                onChange={handleOnChange}
              ></TextInput>
            </div> */}
            <div>
              <label>Your email</label>
              <TextInput
                type="text"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleOnChange}
              ></TextInput>
            </div>
            <div className="relative">
              <label>Your password</label>
              <TextInput
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="********"
                onChange={handleOnChange}
              ></TextInput>
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute cursor-pointer right-3 top-9"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute cursor-pointer right-3 top-9"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <Button
              type="submit"
              gradientDuoTone="purpleToPink"
              className=""
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className=" pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <Button
              className="uppercase bg-gradient-to-r from-red-400 via-grren-900 to-pink-200 rounded-lg outline text-white"
              outline
            >
              Continue with Google
            </Button>
          </form>
          <div className="flex text-sm gap-3 mt-2">
            <span>Dont have an account?</span>
            <Link to="/sign-up" className="text-blue-700">
              Sign Up
            </Link>
          </div>
          {error && (
            <Alert className="fixed mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
