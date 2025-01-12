import React from "react";
import frameimage from '../assets/frame.png';
import Signupform from "./signupfrom";
import Loginform from "./Loginform";
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formtype, setIslogin}) =>{
    return (
        <div className="flex justify-evenly mt-3">

            <div className="flex flex-col justify-center max-w-[45vw]">
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="text-sm tracking-wide">
                    <span className="mt-1">{desc1}</span><br/>
                    <span className="text-blue-400 m">{desc2}</span>
                </p>

                {
                    formtype === "signup" ?
                    (<Signupform setIslogin={setIslogin}/>)
                    : (<Loginform setIslogin={setIslogin} />)
                }

                <div className="flex justify-evenly mt-2 text-slate-400">
                    <div className="bg-slate-400 w-4/12 h-px mt-3"></div>
                    <p>OR</p>
                    <div className="bg-slate-400 w-4/12 h-px mt-3"></div>
                </div>
                <div className="flex justify-center p-1 bg-slate-900 w-full mt-2 rounded-md">
                <button className="flex justify-center items-center gap-2">
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>
                </div>
                

            </div>

                <div className="relative">
                    <img src={frameimage} alt="Pattern" width={360} height={360} loading="lazy"></img>

                    <img src={image} alt="image" width={350} height={350} loading="lazy"
                    className="absolute top-0"/>
                </div>
        </div>
    )
}

export default Template;