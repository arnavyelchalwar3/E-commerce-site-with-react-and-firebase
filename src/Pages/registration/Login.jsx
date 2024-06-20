// import React, { useState } from 'react';
// import Layout from '../../Components/Layout/Layout';
// import { Link } from 'react-router-dom';

// const Login = ({ toggleAuth }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log(email, password);
//   };

//   return (
//     <Layout>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg">Log In</button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{' '}
//            <Link to="/signup" className="text-blue-500 underline">Sign Up</Link>
//           {/* <button onClick={toggleAuth} className="text-gray-500 underline">Sign Up</button> */}
//         </p>
//       </div>
//     </div>
//     </Layout>
//   );
// };

// export default Login;

// code fo Claude A.I

/* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import toast from "react-hot-toast";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import Loader from "../../Components/loader/loader";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import Layout from "../../Components/Layout/Layout";

// const Login = () => {
//     const context = useContext(myContext);
//     const { loading, setLoading } = context;

//     // navigate
//     const navigate = useNavigate();

//     // User Signup State
//     const [userLogin, setUserLogin] = useState({
//         email: "",
//         password: ""
//     });

//     /**========================================================================
//      *                          User Login Function
//     *========================================================================**/

// const userLoginFunction = async () => {
//         // validation 
//         if (userLogin.email === "" || userLogin.password === "") {
//             toast.error("All Fields are required")
//         }

//         setLoading(true);
//         try {
//             const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
//             // console.log(users.user)

//             try {
//                 const q = query(
//                     collection(fireDB, "user"),
//                     where('uid', '==', users?.user?.uid)
//                 );
//                 const data = onSnapshot(q, (QuerySnapshot) => {
//                     let user;
//                     QuerySnapshot.forEach((doc) => user = doc.data());
//                     localStorage.setItem("users", JSON.stringify(user) )
//                     setUserLogin({
//                         email: "",
//                         password: ""
//                     })
//                     toast.success("Login Successfully");
//                     setLoading(false);
//                     if(user.role === "user") {
//                         navigate('/userDashboard');
//                     }else{
//                         navigate('/admindashboard');
//                     }
//                 });
//                 return () => data;
//             } catch (error) {
//                 console.log(error);
//                 setLoading(false);
//             }
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//             toast.error("Login Failed");
//         }
//     }

//     return (
//       <Layout>
//         <div className="flex justify-center items-center h-screen">
//             {loading && <Loader />}
//             <div className="bg-white shadow-md rounded-md p-8 max-w-md">
//                 <h2 className="text-2xl font-bold mb-6">Log In</h2>
//                 <div className="mb-4">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={userLogin.email}
//                         onChange={(e) =>
//                             setUserLogin({
//                                 ...userLogin,
//                                 email: e.target.value
//                             })
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={userLogin.password}
//                         onChange={(e) =>
//                             setUserLogin({
//                                 ...userLogin,
//                                 password: e.target.value
//                             })
//                         }
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
//                     />
//                 </div>
//                 <button
//                     type="button"
//                     onClick={userLoginFunction}
//                     className="w-full bg-black text-white font-bold py-2 px-4 rounded-md mb-4"
//                 >
//                     Log In
//                 </button>
//                 <p className="text-center">
//                     Don't have an account?{" "}
//                     <Link className="text-blue-500 underline" to="/signup">
//                         Sign Up
//                     </Link>
//                 </p>
//             </div>
//         </div>
//         </Layout>
//     );
// };

// export default Login;


import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../Components/loader/loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Layout from "../../Components/Layout/Layout";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            const q = query(
                collection(fireDB, "user"),
                where('uid', '==', users.user.uid)
            );

            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                let user;
                QuerySnapshot.forEach((doc) => user = doc.data());
                localStorage.setItem("users", JSON.stringify(user));
                setUserLogin({
                    email: "",
                    password: ""
                });
                toast.success("Login Successfully");
                setLoading(false);

                if (user.role === "user") {
                    navigate('/userDashboard');
                } else {
                    navigate('/admindashboard');
                }
            });

            return unsubscribe;
        } catch (error) {
            console.error("Error logging in:", error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <Layout>
            <div className="flex justify-center items-center h-screen">
                {loading && <Loader />}
                <div className="bg-white shadow-md rounded-md p-8 max-w-md">
                    <h2 className="text-2xl font-bold mb-6">Log In</h2>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={userLogin.email}
                            onChange={(e) =>
                                setUserLogin({
                                    ...userLogin,
                                    email: e.target.value
                                })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            value={userLogin.password}
                            onChange={(e) =>
                                setUserLogin({
                                    ...userLogin,
                                    password: e.target.value
                                })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={userLoginFunction}
                        className="w-full bg-black text-white font-bold py-2 px-4 rounded-md mb-4"
                    >
                        Log In
                    </button>
                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link className="text-blue-500 underline" to="/signup">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
