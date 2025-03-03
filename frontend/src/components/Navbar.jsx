import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import logo from '../asset/Images/logo2.png';
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state?.user?.user);
  const [isHovered, setIsHovered] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate('/');
    } else {
      toast.error(data.message);
    }
  };

  const toggleMenu = () => setMenuVisible(prev => !prev);

  return (
    <div>
      <nav className="bg-purple-600-transparent backdrop-blur-md bg-opacity-30 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-center flex-1 sm:justify-start">
              <div className="text-whitesmoke text-xl font-bold flex">
                <img src={logo} alt="Logo" className="h-10" />
                <div className='text-2xl'>
                  ROC8
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 bg-[#e9d5ff] px-3 py-2 rounded-md text-xl font-medium"
                      : "text-black hover:bg-[#e9d5ff] hover:text-purple-600 px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 bg-[#e9d5ff] px-3 py-2 rounded-md text-xl font-medium"
                      : "text-black hover:bg-[#e9d5ff] hover:text-purple-600 px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 bg-[#e9d5ff] px-3 py-2 rounded-md text-xl font-medium"
                      : "text-black hover:bg-[#e9d5ff] hover:text-purple-600 px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 bg-[#e9d5ff] px-3 py-2 rounded-md text-xl font-medium"
                      : "text-black hover:bg-[#e9d5ff] hover:text-purple-600 px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  Blog
                </NavLink>

                {user?.name ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center space-x-1 cursor-pointer text-black hover:bg-[#e9d5ff] hover:text-purple-600 px-3 py-2 rounded-md text-xl font-medium">
                      <span>{user?.name}</span>
                      <FaRegUserCircle />
                    </div>
                    {(isHovered) && (
                      <div className="absolute right-0 mt-0 w-32 bg-white shadow-lg rounded-md z-50">
                        <div className="relative">
                          {/* Triangle Indicator */}
                          <div className="absolute -top-2 right-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                        </div>
                        <div
                          onClick={handleLogout}
                          className="cursor-pointer text-black hover:bg-[#e9d5ff] hover:text-purple-600 px-3 py-2 rounded-md text-lg"
                        >
                          Logout
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to="/Login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-700 bg-[#e9d5ff] px-3 py-2 rounded-md text-xl font-medium"
                        : "text-black hover:bg-[#e9d5ff] hover:text-purple-600 px-3 py-2 rounded-md text-xl font-medium"
                    }
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
