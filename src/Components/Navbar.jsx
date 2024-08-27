import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LiaTripadvisor } from "react-icons/lia";
import { MobileNav } from "./MobileNav";
import { MdOutlineEmail } from "react-icons/md";

import logo from '../assets/Images/logo.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const socialLink = [
        { icon: <FaFacebookF className="text-lg font-medium" />, link: "/" },
        { icon: <CiInstagram className="text-lg font-medium" />, link: "/" },
        { icon: <LiaTripadvisor className="text-lg font-medium" />, link: "/" },
        { icon: <FaLinkedinIn className="text-lg font-medium" />, link: "/" },
    ];
    return (

        <header className="bg-[#FFFFFF] px-10">
            <div className="container">
                <div className="flex justify-between items-center">

                    <div className="">
                        <Link to="/">
                            <img src={logo} alt="logo" className="lg:h-[5rem] lg:w-[5rem] h-[3rem] w-[3rem]" />
                        </Link>
                    </div>

                    <div className="w-full lg:block hidden">
                        <nav className="flex items-center justify-end py-3 gap-3">
                            <ul className="flex gap-2">
                                <li>
                                    <NavLink to='/' className="uppercase text-lg font-medium duration-300 hover:bg-[#288173] hover:rounded-3xl  hover:text-white px-3 py-1 flex items-center justify-center"> Home </NavLink>

                                </li>

                                <li>
                                    <NavLink to='/' className="uppercase text-lg font-medium duration-300 hover:bg-[#288173] hover:rounded-3xl  hover:text-white px-3 py-1 flex items-center justify-center"> About </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="uppercase text-lg font-medium duration-300 hover:bg-[#288173] hover:rounded-3xl  hover:text-white px-3 py-1 flex items-center justify-center"> Product </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="uppercase text-lg font-medium duration-300 hover:bg-[#288173] hover:rounded-3xl  hover:text-white px-3 py-1 flex items-center justify-center"> Contact </NavLink>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <AiOutlineMenu className="block lg:hidden text-2xl" />
                    </button>
                </div>
            </div>
            <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>


    )
}

export default Navbar
