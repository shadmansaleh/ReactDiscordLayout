import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun
} from 'react-icons/fa';

import { useState } from 'react';

const TopNavigation = ({heading}) => {
  return (
    <div className="top-navigation">
      <FaHashtag size='24' className='title-hashtag' />
      <h5 className='title-text'>{heading}</h5>
      <ThemeIcon />
      <Search />
      <FaRegBell size='24' className='top-navigation-icon' />
      <FaUserCircle size='24' className='top-navigation-icon' />
    </div>
  )
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleMode = () => {
    if (!darkTheme) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
    setDarkTheme(!darkTheme);
  }
  return (
    <span onClick={toggleMode}>
      {darkTheme ? <FaMoon size='24' className='top-navigation-icon text-gray-200' /> : <FaSun size='24' className='top-navigation-icon text-gray-200' />}
    </span>
  )
};

const Search = () => (
    <div className="search">
      <input type="text" className="search-input" placeholder="Search..." />
      <FaSearch size='18' className='text-secondary my-auto' />
    </div>
);


export default TopNavigation;