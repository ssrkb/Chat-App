import React from 'react'
import "./SidebarOption.css";

function SidebarOption({ Icon, title }) {
  return (
    <div className='SidebarOption'>
        {Icon && <Icon className="SidebarOption_icon"/>}
        {Icon ? (
            <h3>{title}</h3>
        ):(
            <h3 className='sidebarOption__channel'>
                <span className='sidebarOption__hash'>#</span>
            </h3>
        )}
    </div>
  )
}

export default SidebarOption