import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoLogoIonic, IoIosArrowDown } from "react-icons/io"
import { FiLogOut } from 'react-icons/fi'

function SideBar() {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)


  return (
    <div className='sidenav bg-blue text-white h-page'>
                <div className='sidebar-title px-2 py-3'>
                    <span className=''>
                        <h3>
                            <IoLogoIonic className='me-2'/>
                            AlphaBeta
                        </h3>
                    </span>
                </div>
                <div className='menu1 sidebar-title px-2 pb-3' onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
                    <span className=''>
                        <h5 className='ms-2'>
                            Menu 1
                        </h5>
                    </span>
                </div>
            <div className={active ? 'sidebar-item active' : 'sidebar-item'}>
                <div className='sidebar-title px-2' onClick={()=>setActive(!active)} style={{cursor:"pointer"}}>
                    <span className=''>
                        <h5 className='ms-2'>
                            Menu 2
                        </h5>
                    </span>
                    <IoIosArrowDown className='icon-dropdown' onClick={()=>setActive(!active)} w={50}/>
                </div>
                <div className='sidebar-content' onClick={()=>navigate("/menu2")} style={{cursor:"pointer"}}>
                        <h5 className='ms-2'>
                            Menu 1-2
                        </h5>
                </div>
            </div>
            <div className='logout sidebar-title px-2 pb-3 ' style={{cursor:"pointer"}}>
                <h5 className='ms-2'>
                    Logout
                    <FiLogOut className='ms-3'w={50}/>
                </h5>
            </div>
               
    </div>

  )
}

export default SideBar