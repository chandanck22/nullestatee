import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
          <h1 className='font-bold text-sm sm:text-xl'>
            <span className='text-slate-500'>Null Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='Search...' />
          <button> <FaSearch className='text-slate-600' /> </button>
        </form>
        <div className='lg:flex hidden'>
          <ul className='flex gap-4'>
            <li className='text-slate-700 hover:underline'>
              <Link to="/about">About</Link>
            </li>
            <li className='text-slate-700 hover:underline'>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <RiCloseLine className='text-slate-700' />
            ) : (
              <RiMenu3Line className='text-slate-700' />
            )}
          </button>
        </div>
      </div>
      <ul className={`text-center ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <li className='text-slate-700 hover:underline'>
          <Link to="/about">About</Link>
        </li>
        <li className='text-slate-700 hover:underline'>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
      
    </header>
  );
};

export default Header;
