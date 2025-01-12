import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";

const Loginform = ({setIslogin}) =>{
    const [formData, setFormData] = useState({email:"",
        password:""
    });
    const [showpassword, setShowpassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData) =>({
            ...prevData, [event.target.name] : event.target.value
        }));
    }

    function submitHandler(event){
        console.log("hello mai to apna kaam kr hi rha hu");
        event.preventDefault();
        setIslogin(true);
        toast.success("Logged In");
        navigate('/Dashboard')
    }
    return (
        <form onSubmit={submitHandler}>
            <label>
                <p className="font-bold text-sm mt-1">Email Adderess<sup className="text-red-600">*</sup></p>

                <input required
                type="email"
                name="email"
                value={FormData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                className="bg-slate-950 rounded-md mt-1 w-full p-1">
                </input>
            </label>

            <label className=" relative w-full flex flex-col">
                <p className="font-bold text-sm mt-1">Password<sup className="text-red-600">*</sup></p>

                <input required
                type={showpassword ? "text" : "password"}
                name="password"
                value={FormData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                className="bg-slate-950 rounded-md mt-1 p-1">
                </input>

                <span onClick={() => setShowpassword((prev) => !prev)} className="absolute mt-9 right-2">
                    {
                        showpassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
                <Link to='#' className="text-sm flex justify-end text-blue-400">forgot password</Link>
            </label>

                <button className="w-full bg-yellow-500 p-px mt-2 rounded-md">Sign In</button>
        </form>
    )
}

export default Loginform;