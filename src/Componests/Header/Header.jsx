import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from "../../assets/Logo.png"
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex justify-between py-3'>
            <div>
                <img className='w-48' src={Logo} alt="" />
            </div>
            <div>
                <div className='md:hidden text-2xl mr-8 mt-5' onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu> 
                    }
                </div>
                <nav className={`absolute bg-white lg:bg-transparent md:block z-50 md:static px-5 ${open ? 'right-1' : 'right-72'} ${open ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col md:flex-row gap-10'>
                        <li > <NavLink to={"/"}>Home </NavLink> </li>
                        <li > <NavLink to={"/donations"}>Donation </NavLink> </li>
                        <li > <NavLink to={"/statistics"}>Statistics </NavLink> </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;