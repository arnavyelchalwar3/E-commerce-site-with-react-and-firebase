// import { Link } from "react-router-dom";
// import SearchBar from "../searchBar/searchBar"

// const Navbar = () => {
//     // navList Data
//     const navList = (
//         <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
//             {/* Home */}
//             <li>
//                 <Link to={'/'}>Home</Link>
//             </li>

//             {/* All Product */}
//             <li>
//                 <Link to={'/allproduct'}>All Product</Link>
//             </li>

//             {/* Signup */}
//             <li>
//                 <Link to={'/signup'}>Signup</Link>
//             </li>

//             {/* User */}
//             <li>
//                 <Link to={'/'}>Kamal</Link>
//             </li>

//             {/* Admin */}
//             {/* <li>
//                 <Link to={'/'}>Admin</Link>
//             </li> */}

//             {/* logout */}
//             {/* <li>
//                 logout
//             </li> */}

//             {/* Cart */}
//             <li>
//                 <Link to={'/cart'}>
//                     Cart(0)
//                 </Link>
//             </li>
//         </ul>
//     )
//     return (
//         <nav className="bg-yellow-500	 sticky top-0">
//             {/* main  */}
//             <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//                 {/* left  */}
//                 <div className="left py-3 lg:py-0">
//                     <Link to={'/'}>
//                     <h2 className=" font-bold text-white text-2xl text-center">E-Bharat</h2>
//                     </Link>
//                 </div>

//                 {/* right  */}
//                 <div className="right flex justify-center mb-4 lg:mb-0">
//                     {navList}
//                 </div>

//                 {/* Search Bar  */}
//                 <SearchBar />
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// import { Link } from "react-router-dom";
// import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importing icons from react-icons
// import SearchBar from "../searchBar/searchBar";

// const Navbar = () => {
//     return (
//         <nav className="bg-blue-600 sticky top-0 shadow-md">
//             <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
//                 {/* Left: Home and All Products link */}
//                 <div className="flex items-center space-x-6">
//                     <Link to={'/'}>
//                         <h2 className="font-bold text-white text-3xl">Home</h2>
//                     </Link>
//                     <Link to={'/allproduct'} className="text-white text-lg hover:text-gray-300">
//                         All Products
//                     </Link>
//                 </div>

//                 {/* Center: Search Bar */}
//                 <div className="flex-1 flex justify-center">
//                     <SearchBar className="w-full max-w-md lg:max-w-lg px-2 py-1 text-black rounded-md" />
//                 </div>

//                 {/* Right: Icons for Login/Signup and Cart */}
//                 <div className="flex items-center space-x-6">
                    
//                 </div>
//             </div>
//         </nav>



// import React from 'react';
// import { Link } from "react-router-dom";
// import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importing icons from react-icons


// const NavBar = () => {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//         <div className="text-lg font-bold text-gray-800">
//           <a href="/" className="text-2xl font-bold text-gray-900">M<span className="text-red-500">a</span>x fashion.</a>
//         </div>
//         <div className="flex space-x-4">
//           <a href="/" className="text-gray-800 hover:text-red-500">Home</a>
//           <a href="/" className="text-gray-800 hover:text-red-500 relative">
//             Shop
//             <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></div>
//           </a>
//           {/* <a href="/" className="text-gray-800 hover:text-red-500">Pages</a> */}
//           <a href="/" className="text-gray-800 hover:text-red-500">About</a>
//           <a href="/" className="text-gray-800 hover:text-red-500">Contacts</a>
//         </div>
//         <div className="flex space-x-4 items-center">
//           {/* <a href="/" className="text-gray-800 hover:text-gray-600">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.002 9.002 0 015 20.944M12 2a9 9 0 110 18 9 9 0 010-18zm0 0v9a3 3 0 000 6m0 0h6m-6-6H6"></path></svg>
//           </a>
//           <a href="/" className="text-gray-800 hover:text-gray-600">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26c.21.14.47.14.68 0L19 8m-7 6v6m-8-6v6m5-11a1 1 0 011-1h4a1 1 0 011 1v2H5V7zm5 2h4V7h-4v2zm0 4h4v6h-4v-6z"></path></svg>
//           </a>
//           <a href="/" className="text-gray-800 hover:text-gray-600">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10M4 10h16M4 10L3 7M20 10L21 7"></path></svg>
//           </a>
//           <a href="/" className="text-gray-800 hover:text-gray-600">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.35-6.7A1 1 0 0017.5 5H6.35L5.1 8H7zm6 4v6m-4-6v6m8-6v6"></path></svg>
//             <span className="ml-1">$0.00</span>
//           </a> */}
//           <Link to={'/signup'} className="text-gray-800 hover:text-gray-300">
//                         <FaUser className="w-6 h-6" />
//                     </Link>
//                     <Link to={'/cart'} className="text-gray-800 hover:text-gray-300">
//                         <FaShoppingCart className="w-6 h-6" />
//                     </Link>
//         </div>
        
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import SearchBar from '../searchBar/searchBar';

const Navbar = () => {
    // Get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // Navigate 
    const navigate = useNavigate();

    // Logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    };

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-gray-800 font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}  className='text-gray-800 hover:text-red-500 font-bold '>Home</Link>
            </li>

            {/* All Products */}
            <li>
                <Link to={'/allproduct'}  className='text-gray-800 hover:text-red-500 font-bold ' >All Products</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}  className='text-gray-800 hover:text-red-500 font-bold '>Signup</Link>
            </li> : ""}

            {/* Login */}
            {!user ? <li>
                <Link to={'/login'}   className='text-gray-800 hover:text-red-500 font-bold '>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}  className='text-gray-800 hover:text-red-500 font-bold '>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}  className='text-gray-800 hover:text-red-500 font-bold '>Admin</Link>
            </li>}

            {/* Logout */}
            {user && <li  onClick={logout}  className='text-gray-800 hover:text-red-500 font-bold '>
                Logout
            </li>}

            {/* Cart */}
            {/* <li>
                <Link to={'/cart'}>
                    Cart(0)
                </Link>
            </li> */} 
        </ul>
    );

    return (
        <nav className="bg-white shadow-md sticky top-0 h-20">
            <div className="container mx-auto flex justify-between items-center py-3 px-6 lg:px-10">
                {/* Left: Brand */}
                <div className="left py-3 lg:py-0 text-lg font-bold text-gray-800 mt-3 ">
                    <Link to={'/'}>
                       <a href="/" className="text-2xl font-bold text-gray-900">M<span className="text-red-500">a</span>x fashion.</a>
                    </Link>
                </div>

                {/* Center: Search Bar */}
                <div className="flex-1 flex justify-center mb-4 lg:mb-0 mt-3 ">
                    <SearchBar className="w-full max-w-md lg:max-w-lg px-2 py-1 text-black rounded-md" />
                </div>

                {/* Right: Navigation Links */}
                <div className="right flex items-center space-x-6  mt-3 ">
                    {navList}
                    {/* Icons */}
                    <Link to={'/signup'} className="text-gray-800 hover:text-gray-500">
                        <FaUser className="w-6 h-6" />
                    </Link>
                    <Link to={'/cart'} className="text-gray-800 hover:text-gray-500">
                        0 <FaShoppingCart className="w-6 h-6" /> 
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
