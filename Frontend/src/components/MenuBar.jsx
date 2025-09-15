import { useState } from 'react';
import { assets } from '../assets/assets'; // adjust path based on your project
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, useClerk, UserButton } from '@clerk/clerk-react';

const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn, openSignUp } = useClerk();
  const openRegister = () => {
    openSignUp({});
    setMenuOpen(false);
  }
  const openLogin = () => {
    openSignIn({});
    setMenuOpen(true);
  }

  return (
    <nav className="bg-white px-8 py-4 flex justify-between items-center">
      {/* Left side: logo + text */}
      <Link className="flex items-center space-x-2" to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 w-8 object-contain cursor-pointer"
        />
        <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
          remove.<span className="text-gray-400 cursor-pointer">bg</span>
        </span>
      </Link>

      {/* Right side: you can add menu items / icons here */}
      <div className="hidden md:flex items-center space-x-4">
        <SignedOut>
          <button className="text-gray-700 hover:text-blue-500 font-medium" onClick={openLogin}>
            Login
          </button>
          <button onClick={openRegister} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all">
            Signup
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 w-40 p-4">
          <SignedOut>
             <button className="text-gray-700 hover:text-blue-500 font-medium" onClick={openLogin}>
            Login
          </button>
          <button onClick={openRegister} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center">
            Sign Up
          </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
