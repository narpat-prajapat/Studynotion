import React from "react";
import Template from "../components/Template";
import signupImg from '../assets/signup.png'

function Signup({setIslogin}){
    return (
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tommorow, and beyond."
        desc2="Eduction to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIslogin= {setIslogin}
        />
    )
}

export default Signup;