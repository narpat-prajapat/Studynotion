import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const Signupform = ({setIslogin}) => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:""
    });


    const [showpassword, setShowpassword] = useState(false);
    const [showpassword2, setShowpassword2] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData) =>({
            ...prevData, [event.target.name] : event.target.value
        }));
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password are not match");
            return ;
        }
        setIslogin(true);
        toast.success("Account created Successfully");
        navigate("/Dashboard");
    }

    return (
        <div>
            
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex justify-evenly">
                <lable>
                    <p className="font-bold text-sm mt-1">First Name<sup className="text-red-600">*</sup></p>
                    <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className="bg-slate-950 rounded-md mt-1 p-1 w-36"
                    />
                </lable>
                <lable>
                    <p className="font-bold text-sm mt-1">Last Name<sup className="text-red-600">*</sup></p>
                    <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    className="bg-slate-950 rounded-md mt-1 p-1 ml-2 w-36"
                    />
                </lable>
                </div>
                
                <lable>
                <p className="font-bold text-sm mt-1">Email Adderess<sup className="text-red-600">*</sup></p>

                <input required
                type="email"
                name="email"
                value={FormData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                className="bg-slate-950 rounded-md mt-1 p-1 w-full">
                </input>
                </lable>

                <div className="flex">
                <lable className="relative">
                    <p className="font-bold text-sm mt-1">Create Password <sup className="text-red-600">*</sup></p>
                    <input
                    required
                    type={showpassword ? "text" : "password"}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Create Password"
                    value={formData.password}
                    className="bg-slate-950 rounded-md mt-1 p-1 w-36">
                    </input>
                    <span onClick={() => setShowpassword((prev) => !prev)}
                        className="absolute mt-3 right-1">
                    {
                        showpassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                    </span>
                </lable>

                <lable className="relative">
                    <p className="font-bold text-sm mt-1">Confirm Password<sup className="text-red-600">*</sup></p>
                    <input
                    required
                    type={showpassword2 ? "text" : "password"}
                    name="confirmpassword"
                    onChange={changeHandler}
                    placeholder="Re-Enter Password"
                    value={formData.confirmpassword}
                    className="bg-slate-950 rounded-md mt-1 p-1 w-36 ml-2"
                    >
                    </input>

                    <span onClick={() => setShowpassword2((prev) => !prev)}
                        className="absolute mt-3 right-1">
                    {
                        showpassword2 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                    </span>
                </lable>
                </div>
                
                <button className="w-full flex justify-center bg-yellow-400 rounded-md mt-4">Create account</button>
            </form>

        </div>
    )
}

export default Signupform;