import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./About";
import Contact from "./Contact";

export default function Menu() {

    return (
        <>
            <h1>Management System</h1>

            <nav>
                <Link to="/menu">Home</Link>
                {" | "}
                <Link to="/menu/about">About</Link>
                {" | "}
                <Link to="/menu/contact">Contact</Link>
            </nav>

            <hr />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<AboutUs />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>
        </>
    );
}