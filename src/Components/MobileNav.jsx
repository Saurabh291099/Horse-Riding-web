import React from "react";
import { Link, NavLink } from "react-router-dom";


export const MobileNav = ({ menuOpen, setMenuOpen }) => {
    // const Nav_Links_Arr = Nav_Links();
    return (
        <div
            className="mobile-nav fixed top-0 right-0 w-[320px] h-[100vh] bg-white z-[999] px-8 py-4"
            style={{
                right: menuOpen ? "0" : "-100%",
                transition: "all 0.5s",
            }}
        >
            <p
                className="text-end text-[2rem] font-extrabold"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                X
            </p>
            <ul className="flex flex-col gap-8">
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
        </div>
    );
};
