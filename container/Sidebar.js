import React from 'react';
import "./Sidebar.css";
import { BsCircleFill } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import SidebarOption from './SidebarOption';
import {GoThreeBars} from "react-icons/go";
import {IoMdApps} from "react-icons/io";
import {BsSave} from "react-icons/bs";
import {BsFillPeopleFill} from "react-icons/bs";
import {MdExpandLess} from "react-icons/md";
import {FcExpand} from "react-icons/fc";

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='Sidebar_header'>
            <div className='Sidebar_info'>
                <h2>Coder</h2>
                <h3>
                    <BsCircleFill/>
                    soham chougule
                </h3>
            </div>
            <MdCreate/>
        </div>
        <SidebarOption Icon={GoThreeBars} title="threads"/>
        <SidebarOption Icon={IoMdApps} title="apps"/>
        <SidebarOption Icon={BsSave} title="saved items"/>
        <SidebarOption Icon={BsFillPeopleFill} title="People and User group"/>
        <SidebarOption Icon={MdExpandLess} title="Show less"/>
        <hr/>
        <SidebarOption Icon={FcExpand} title="Show More"/>
        <hr/>
        {/*connect to DB and list all the items*/}
        {/*sidebarOption.......*/}

    </div>

  )
}

export default Sidebar