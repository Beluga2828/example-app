import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Profile from "../components/profile";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/login";
import Profile1 from "../components/Profile1";


function Routes1() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/login" element={<Login />} />             
                    <Route path="/profile1" element={<Profile1 />} />
                    <Route path="/" element={<Profile />}>
                        {/* <Route path='/' element={<About />} /> */}
                        <Route path='/contactus' element={<Contact />} />
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routes1;