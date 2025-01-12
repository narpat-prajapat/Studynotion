import React from "react";
import Template from "../components/Template";
import loginImg from '../assets/login.png';
function Login({setIslogin}){
    return(
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tommorow, and beyond."
        desc2="Eduction to future-proof your career."
        image={loginImg}
        formtype="login"
        setIslogin= {setIslogin}
        />
    )
}

export default Login;