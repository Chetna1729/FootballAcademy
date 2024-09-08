import React, { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import FlyoutLink from "./FlyoutLink";
import AboutContent from "./About/AboutContent";
import TeamContent from "./TeamContent";
import JoinusContent from "./JoinusContent";
import ContactContent from "./Contact/ContactContent";
import { Link } from "react-router-dom";
import { UserContext } from '../App';

const Navbar = () => {

  const {state, dispatch} = useContext(UserContext);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const RenderMenu = () => {
    if(state) {
      return(
        <div className="relative mr-12">
              <AiOutlineUser
                onClick={toggleProfileMenu}
                className="text-white text-2xl cursor-pointer"
              />
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-black">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    View Profile
                  </Link>
                  <Link to="/logout"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
      )
    } else {
      return(
        <>
              <Link to="/login" className="rounded-sm bg-[#D7FF40] mx-2 px-4 py-2 text-sm md:px-6 md:py-2 font-semibold text-black hover:bg-[#B5D53E]">
                Login
              </Link>
              <Link to="/register" className="rounded-sm bg-[#D7FF40] mx-2 mr-8 px-4 py-2 text-sm md:px-6 md:py-2 font-semibold text-black hover:bg-[#B5D53E]">
                Sign up
              </Link>
            </>
      )
      
    }
  }

  return (
    <div className="bg-[#010B13] p-4 text-white shadow-lg">
      <div className="max-w-[1600px] flex items-center justify-between mx-auto py-[15px]">
        <h2 className="text-xl md:text-2xl font-bold ml-12">
          RISING SUN <span className="text-[#78FF40]">FA</span>
        </h2>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm md:text-base">Home</Link>
          <FlyoutLink href="#" FlyoutContent={AboutContent} className="text-sm md:text-base">
            About
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={TeamContent} className="text-sm md:text-base">
            Team
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={JoinusContent} className="text-sm md:text-base">
            Join Us
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ContactContent} className="text-sm md:text-base">
            Contact
          </FlyoutLink>
        </div>
        <div className="hidden md:block">
          <RenderMenu/>
        </div>
        <div className="md:hidden text-white text-2xl">
          {isMenuOpen ? (
            <AiOutlineClose onClick={toggleMenu} className='text-white text-2xl md:hidden block'/>
          ) : (
            <AiOutlineMenu onClick={toggleMenu} className='text-white text-2xl md:hidden block' />
          )}
        </div>
      </div>
      {/* Responsive menu */}
      {/* <div
        className={`duration-300 md:hidden w-full h-screen fixed bg-[#010B13] text-white top-[90px] ${
          isMenuOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col items-start justify-center h-full space-y-8 pl-10">
          <li className="hover:z-10">
            <FlyoutLink href="#" className="text-lg">Home</FlyoutLink>
          </li>
          <li className="hover:z-10">
            <FlyoutLink href="#" FlyoutContent={AboutContent} className="text-lg">
              About
            </FlyoutLink>
          </li>
          <li className="hover:z-10">
            <FlyoutLink href="#" FlyoutContent={TeamContent} className="text-lg">
              Team
            </FlyoutLink>
          </li>
          <li className="hover:z-10">
            <FlyoutLink href="#" FlyoutContent={JoinusContent} className="text-lg">
              Join Us
            </FlyoutLink>
          </li>
          <li className="hover:z-10">
            <FlyoutLink href="#" FlyoutContent={ContactContent} className="text-lg">
              Contact
            </FlyoutLink>
          </li>
          {!isLoggedIn ? (
            <li>
              <button className="rounded-sm bg-[#FFD700] px-6 py-2 font-semibold text-black hover:bg-[#B5D53E]">
                Login
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => setIsLoggedIn(false)} // Logout action
                className="rounded-sm bg-[#FFD700] px-6 py-2 font-semibold text-black hover:bg-[#B5D53E]"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
