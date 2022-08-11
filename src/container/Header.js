import React from 'react';
import './Header.css';
import { MdAccountCircle} from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import {FiHelpCircle} from "react-icons/fi";

function Header() {
  return (
    <div className='header'> 
      <div className='header_left'>
        <MdAccountCircle size={30}/>
        <BiTimeFive/>
      </div>
      <div className='header_search'>
        <AiOutlineSearch/>
        <input placeholder='search heres' ></input>
      </div>
      <div className='header_right'>
        <FiHelpCircle/>
      </div>
    </div>
  )
}

export default Header