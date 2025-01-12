import React, { useState } from "react";
import logo from '../assets/Logo.svg';
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) =>{
    let islogin = props.islogin;
    let setIslogin = props.setIslogin;
    return (
        <div className="flex justify-evenly">
            <Link to= "/">
                <img src={logo} alt="Logo" width={160} height={30} loading="lazy"/>
            </Link>

            <nav>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>

                </ul>
            </nav>
            <div className="flex gap-3">
                { !islogin &&
                    <Link to = "/login">
                        <button className="bg-black p-2 rounded-lg">
                            Login
                        </button>
                    </Link>
                }
                { !islogin &&
                    <Link to = "/signup">
                        <button className="bg-black p-2 rounded-lg">
                            Sign Up
                        </button>
                    </Link>
                }
                { islogin &&
                    <Link to = "/">
                        <button onClick={()=>{
                            setIslogin(false);
                            toast.success("Logged Out");
                        }} className="bg-black p-2 rounded-lg">
                            Log Out
                        </button>
                    </Link>
                }
                { islogin &&
                    <Link to = "/Dashboard">
                        <button className="bg-black p-2 rounded-lg">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar;