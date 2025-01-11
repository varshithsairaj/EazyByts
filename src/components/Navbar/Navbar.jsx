import React, {useRef, useState} from 'react'
import './Navbar.css'
import logo1 from '../../assets/logo1.png'
import underline from '../../assets/nav_underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'   /* resposive */
import menu_close from '../../assets/menu_close.svg'   /* resposive */

const Navbar = () => {

  const[menu,setMenu] = useState("home");
  const menuRef = useRef(); /* responsive */

  const openMenu = () => {
    menuRef.current.style.right="0";   /* responsive */
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"   /* responsive */
  }

  return (
    <div className='navbar'>
      <img src={logo1} alt=""  className="navbar-logo"/>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={underline} alt='' className='underline'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu=="skills"?<img src={underline}  alt='' className='underline'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu=="projects"?<img src={underline} alt='' className='underline'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={underline} alt='' className='underline'/>:<></>}</li>

      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
