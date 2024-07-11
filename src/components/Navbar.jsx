
import { useState } from 'react';
import logo from '../assets/asset 0.png';
import rightLogo from '../assets/asset 1.svg';
import { FaBars, FaArrowRight, FaAnkh} from 'react-icons/fa';
import styles from '../styles/style.module.css';
import NavExpand from './NavExpand';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='shadow-md fixed top-0 z-20 w-screen flex items-center justify-between p-4 h-[10vh] bg-white overflow-hidden'>
        <div className='flex gap-2 items-center justify-center'>
            <img src={logo} alt="nav logo" />
            <span className='text-lg font-medium font-ppns'>ALphaDev</span>
        </div>

        <div className='flex items-center justify-center p-1 md:hidden' onClick={()=>{setToggleMenu(prev=>!prev)}}>
          {toggleMenu?<FaAnkh className={`${styles.menu}`}/>:<FaBars className={`${styles.menu}`}/>}
        </div>

        <div className='hidden md:flex items-center justify-center'>
            <ul className='flex gap-4'>
                <a href='#'><li className={`font-medium hover:text-primary ${styles.item}`}>Pricing</li></a>
                <a href='#'><li className={`font-medium hover:text-primary ${styles.item}`}>Docs</li></a>
                <a href='#'><li className={`font-medium hover:text-primary ${styles.item}`}>Changelog</li></a> 
                <a href='#'><li className={`font-medium hover:text-primary ${styles.item}`}>Blogs</li></a>
                <a href='#'><li className={`font-medium hover:text-primary ${styles.item}`}>Login</li></a>
            </ul>
        </div>

        <div className='hidden md:flex items-center justify-center rounded-xl gap-2 p-2 border border-slate-300 hover:border-slate-500 transition-all duration-300 ease-in-out cursor-pointer'>
                <img src={rightLogo} alt="" />
                <span>Alpha Developers</span>
                <span> <FaArrowRight /> </span>
        </div>
        <NavExpand toggle = {toggleMenu} />
    </nav>

  )
}

export default Navbar;