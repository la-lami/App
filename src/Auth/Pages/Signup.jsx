// import React from "react";
// //   import { NavLink } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const Handlesignup = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-slate-200">
//       <div className="flex flex-col items-center justify-center p-6 w-[400px] h-[400px] bg-white border shadow-lg rounded-lg">
//         <h1 className="text-3xl">
//           <b>SIGNUP</b>
//         </h1>
//         <div className="flex flex-col justify-center items-center pt-5 gap-3">
//           <input
//             type="text"
//             placeholder="username"
//             className="bg-gray-100 rounded py-3 px-8"
//           />
//           <input
//             type="password"
//             placeholder="password"
//             className="bg-gray-100 rounded-md py-3 px-8"
//           />
//           <input
//             type="password"
//             placeholder="confirm password"
//             className="bg-gray-100 py-3 px-8 rounded"
//           />
//           <button
//             className="bg-blue-600 text-white py-2 px-20 rounded"
//             onClick={Handlesignup}
//           >
//             SIGNUP
//           </button>
//           {/* <h4 className="text-slate-400 text-sm">Already have an account?<NavLink to='/' className="text-blue-500">Login</NavLink></h4> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset errors before validation
    const newErrors = {};
    if (!username) newErrors.username = "Please enter username";
    if (!email) newErrors.email = "Please enter email";
    if (!password) newErrors.password = "Please enter password";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Check if username already exists
      const response = await axios.get("http://localhost:3000/users", {
        params: { username },
      });

      if (response.data.length > 0) {
        // Set username-specific error
        setErrors({
          username: "Username already exists. Please choose another.",
        });
        return;
      }

      // Create a new user
      const newUser = { username, email, password };
      await axios.post("http://localhost:3000/users", newUser);

      // Redirect to login or dashboard
      navigate("/login");
    } catch (err) {
      // Set general error
      setErrors({ general: "Error occurred. Please try again." });
    }
  };

  return (
    <div className="App flex items-center justify-center h-screen w-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
      <div className="flex flex-col justify-between items-center py-[50px] w-[350px] h-[600px] bg-slate-300 border shadow-lg rounded-xl">
        <span className="font-serif font-bold text-4xl py-[3px]">SIGN UP</span>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center  gap-5"
        >
          <div className="flex flex-col w-[250px]">
            <input
              className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrors({ ...errors, username: "" });
              }}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username}</span>
            )}
          </div>

          <div className="flex flex-col w-[250px]">
            <input
              className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col w-[250px]">
            <input
              className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          <div className="flex flex-col w-[250px]">
            <input
              className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors({ ...errors, confirmPassword: "" });
              }}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {errors.general && (
            <span className="text-red-500">{errors.general}</span>
          )}
          <button
            type="submit"
            className="w-[250px] h-[35px] cursor:pointer bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500">
            LOGIN
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
