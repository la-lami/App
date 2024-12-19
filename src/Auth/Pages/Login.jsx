// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [generalError, setGeneralError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Reset errors before validation
//     const newErrors = {};
//     if (!username) newErrors.username = "Please enter username";
//     if (!password) newErrors.password = "Please enter password";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       const response = await axios.get("http://localhost:5000/users", {
//         params: { username },
//       });

//       const user = response.data.find(
//         (user) => user.username === username && user.password === password
//       );

//       if (user) {
//         navigate("/dashboard");
//       } else {
//         setGeneralError("Invalid username or password.");
//       }
//     } catch (err) {
//       setGeneralError("Error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="App flex items-center justify-center h-screen w-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
//       <div className="flex flex-col justify-between items-center py-[50px] w-[350px] h-[500px] bg-slate-300 border shadow-lg rounded-xl">
//         <span className="font-serif font-bold text-4xl py-[3px] pb-10">
//           LOGIN
//         </span>
//         <form
//           onSubmit={handleLogin}
//           className="flex flex-col items-center gap-5"
//         >
//           <div className="flex flex-col w-[250px] ">
//             <input
//               className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => {
//                 setUsername(e.target.value);
//                 setErrors((prev) => ({ ...prev, username: "" }));
//               }}
//             />
//             {errors.username && (
//               <span className="text-red-500 text-sm">{errors.username}</span>
//             )}
//           </div>
//           <div className="flex flex-col w-[250px]">
//             <input
//               className="border border-black rounded w-full h-[40px] bg-transparent border-b-2 border-b-gray-400"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setErrors((prev) => ({ ...prev, password: "" }));
//               }}
//             />
//             {errors.password && (
//               <span className="text-red-500 text-sm">{errors.password}</span>
//             )}
//           </div>
//           <button
//             type="submit"
//             className=" w-[250px] h-[35px] font-medium mt-5 bg-white px-[80px] py-2 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-blue-500 hover:to-green-500"
//           >
//             Login
//           </button>
//         </form>
//         {generalError && <p className="text-red-500 mt-3">{generalError}</p>}
//         <p className="mt-9">
//           <span className="text-xs text-blue-500">Forgot Password?</span>
//         </p>
//         <p className="mt-2 text-sm mb-12">
//           <span>Don't have an account?</span>
//           <span className="text-sm text-blue-500 ">
//             <NavLink to={"/Signup"}>Sign up</NavLink>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!username) newErrors.username = "Please enter username";
    if (!password) newErrors.password = "Please enter password";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: { username },
      });

      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        login(user); // Save the logged-in user in context
        navigate("/"); // Redirect to home or dashboard
      } else {
        setGeneralError("Invalid username or password.");
      }
    } catch (err) {
      setGeneralError("Error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
      <div className="w-[350px] h-[500px] bg-slate-300 border shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prev) => ({ ...prev, username: "" }));
            }}
            className="p-2 border rounded"
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username}</span>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
            className="p-2 border rounded"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </form>
        {generalError && <p className="text-red-500 mt-2">{generalError}</p>}
      </div>
    </div>
  );
};

export default Login;
