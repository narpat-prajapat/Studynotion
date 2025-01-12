import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard'

function App() {
  const [islogin, setIslogin] = useState(false);
    return (
      <div className="bg-slate-800 text-white w-full h-[100vh]">
        <Navbar islogin = {islogin} setIslogin = {setIslogin}/>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/login" element ={<Login setIslogin={setIslogin}/>}/>
          <Route path="/signup" element ={<Signup setIslogin={setIslogin}/>}/>
          <Route path="/Dashboard" element ={<Dashboard/>}/>

        </Routes>

      </div>
    )
}

export default App;
