// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import MyContext from "../../context/myContext";
// import Layout from "../../Components/Layout/Layout";
// import { Timestamp, addDoc, collection } from "firebase/firestore";
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import toast from "react-hot-toast";
// import Loader from "../../Components/loader/loader";


// const SignUp = () => {

//   // const [fullName, setFullName] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleSignUp = (e) => {
//   //   e.preventDefault();
//   //   // Add your sign-up logic here
//   //   console.log(fullName, email, password);
//   // };
// const context= useContext(MyContext)
// const { loading, setLoading } = context;  
// const navigate = useNavigate();

//   const [userSignup, setUserSignup] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "user"
//     });
//     const userSignupFunction = async () => {
//         // validation 
//         if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
//             toast.error("All Fields are required")
//         }

//         setLoading(true);
//         try {
//             const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

//             // create user object
//             const user = {
//                 name: userSignup.name,
//                 email: users.user.email,
//                 uid: users.user.uid,
//                 role: userSignup.role,
//                 time: Timestamp.now(),
//                 date: new Date().toLocaleString(
//                     "en-US",
//                     {
//                         month: "short",
//                         day: "2-digit",
//                         year: "numeric",
//                     }
//                 )
//             }

//             // create user Refrence
//             const userRefrence = collection(fireDB, "user")

//             // Add User Detail
//             addDoc(userRefrence, user);

//             setUserSignup({
//                 name: "",
//                 email: "",
//                 password: ""
//             })

//             toast.success("Signup Successfully");

//             setLoading(false);
//             navigate('/login')
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }

//     }
    
//   return (
//     <Layout>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       {/* {Loader && <Loader className="animate-spin h-16 w-16 text-blue-600" />} */}
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
//         <form >   
//           {/* onSubmit={handleSignUp} */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
//             <input
//               type="text"
//               // value={fullName}
//               // onChange={(e) => setFullName(e.target.value)}
//                value={userSignup.name}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 name: e.target.value
//                             })
//                         }}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//             <input
//               type="email"
//               // value={email}
//               // onChange={(e) => setEmail(e.target.value)}
//                value={userSignup.email}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 email: e.target.value
//                             })
//                         }}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//             <input
//               type="password"
//               // value={password}
//               // onChange={(e) => setPassword(e.target.value)}
//                value={userSignup.password}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...userSignup,
//                                 password: e.target.value
//                             })
//                         }}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button
//            type="submit"
//             onClick={userSignupFunction}
//             className="w-full bg-gray-800 text-white py-2 rounded-lg">Sign Up</button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-500 underline">Log In</Link>
//           {/* <button  className="text-blue-500 underline">Log In</button> */}
//         </p>
//       </div>
//     </div>
//     </Layout>
//   );
// };

// export default SignUp;


// code for form cluade ai 

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../Components/loader/loader";
import Layout from "../../Components/Layout/Layout";

const Signup = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const userSignupFunction = async () => {
    if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      const userRefrence = collection(fireDB, "user");
      addDoc(userRefrence, user);
      setUserSignup({ name: "", email: "", password: "" });
      toast.success("Signup Successfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="login_Form bg-white px-8 py-6 border border-gray-200 rounded-xl shadow-md">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-gray-800">Sign Up</h2>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
            className="bg-gray-100 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            value={userSignup.email}
            onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
            className="bg-gray-100 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
            className="bg-gray-100 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
        </div>
        <div className="mb-5">
          <button
            type="button"
            onClick={userSignupFunction}
            className="bg-gray-800 hover:bg-gray-700 w-full text-white text-center py-2 font-bold rounded-md"
          >
            Sign Up
          </button>
        </div>
        <div>
          <h2 className="text-gray-600">
            Already have an account? <Link className="text-blue-500 underline" to={"/login"}>Log In</Link>
          </h2>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Signup;