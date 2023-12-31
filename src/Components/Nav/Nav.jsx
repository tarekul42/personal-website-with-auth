import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    let user = true;

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='education'>Education</NavLink></li>
                    <li><NavLink to='programming'>Programming</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl xl:text-4xl">Tarekul Islam RIfat</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 xl:text-2xl">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li className='mx-2'><NavLink to='education'>Education</NavLink></li>
                    <li><NavLink to='programming'>Programming</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <NavLink to='/register' className="xl:text-3xl px-4">Register</NavLink> :
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="../../../public/myImage-01.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default Nav;