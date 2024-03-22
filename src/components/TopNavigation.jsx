import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun
} from 'react-icons/fa';

import React, { useState } from 'react';

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

class ThemeIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {darkTheme : false};
    if (this.state.darkTheme) window.document.documentElement.classList.add('dark');
  }
  toggleMode = () => {
    if (!this.state.darkTheme) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
    this.setState({darkTheme: !this.state.darkTheme});
  }
  render() {
    return (
      <span onClick={this.toggleMode}>
        {!this.state.darkTheme ? <FaMoon size='24' className='top-navigation-icon text-gray-500' /> : <FaSun size='24' className='top-navigation-icon text-gray-200' />}
      </span>
    )
  }
}

const Search = () => (
    <div className="search">
      <input type="text" className="search-input" placeholder="Search..." />
      <FaSearch size='18' className='text-secondary my-auto hover:text-pink-400 transition duration-300 ease-in-out' />
    </div>
);


export default TopNavigation;