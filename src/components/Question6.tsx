/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Questions.css";
import Footer from "./Footer";
import HeaderComp from "./HeaderComp";

const Question6 = () => {

    const navigate = useNavigate();

    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login")
      }
    },[navigate])

    const [selectedOption, setSelectedOption] = useState("");

    const handleCheck = (option: any) => {
        setSelectedOption(option);
    };

    const calculateBackgroundColor = (option: any) => {
        return selectedOption === option ? { backgroundColor: "rgba(231,76,60,1)" } : {};
    };

    return (
        <>
        <HeaderComp/>
            <Box id={"banner2"} className={"Banner_container okkkk"}>
                <div className="box_top oks">
                    <h2 style={{ fontSize: "medium" }}>6. Please select any other category you’re interested in.</h2>
                </div>
                <ul className="occasion">
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("I don’t have a preference")}
                        style={calculateBackgroundColor("I don’t have a preference")}>
                        <input type="checkbox" checked={selectedOption === "I don’t have a preference"} />
                        <span className="oc_tex">I don’t have a preference.</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("Movies based on a true story")}
                        style={calculateBackgroundColor("Movies based on a true story")}>
                        <input type="checkbox" checked={selectedOption === "Movies based on a true story"} />
                        <span className="oc_tex">Movies based on a true story</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("Movies that may change the way you look at life")}
                        style={calculateBackgroundColor("Movies that may change the way you look at life")}>
                        <input type="checkbox" checked={selectedOption === "Movies that may change the way you look at life"} />
                        <span className="oc_tex">Movies that may change the way you look at life</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Movies set in New York City")}
                        style={calculateBackgroundColor("Movies set in New York City")}>
                        <input type="checkbox" checked={selectedOption === "Movies set in New York City"} />
                        <span className="oc_tex">Movies set in New York City</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Spy Movies and Cop Movies")}
                        style={calculateBackgroundColor("Spy Movies and Cop Movies")}>
                        <input type="checkbox" checked={selectedOption === "Spy Movies and Cop Movies"} />
                        <span className="oc_tex">Spy Movies and Cop Movies</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Space Movies")}
                        style={calculateBackgroundColor("Space Movies")}>
                        <input type="checkbox" checked={selectedOption === "Space Movies"} />
                        <span className="oc_tex">Space Movies</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Wedding Movies")}
                        style={calculateBackgroundColor("Wedding Movies")}>
                        <input type="checkbox" checked={selectedOption === "Wedding Movies"} />
                        <span className="oc_tex">Wedding Movies</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Heist Movies")}
                        style={calculateBackgroundColor("Heist Movies")}>
                        <input type="checkbox" checked={selectedOption === "Heist Movies"} />
                        <span className="oc_tex">Heist Movies</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Movies based on a book")}
                        style={calculateBackgroundColor("Movies based on a book")}>
                        <input type="checkbox" checked={selectedOption === "Movies based on a book"} />
                        <span className="oc_tex">Movies based on a book</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Racing Movies")}
                        style={calculateBackgroundColor("Racing Movies")}>
                        <input type="checkbox" checked={selectedOption === "Racing Movies"} />
                        <span className="oc_tex">Racing Movies</span>
                    </li>
                    <li className="occasion1"
                        onClick={() => handleCheck("Girl Power Movies")}
                        style={calculateBackgroundColor("Girl Power Movies")}>
                        <input type="checkbox" checked={selectedOption === "Girl Power Movies"} />
                        <span className="oc_tex">Girl Power Movies</span>
                    </li>
                </ul>
                <NavLink to={"/question5"}  className="back">
                    <div><i className="fa-solid fa-arrow-left"></i>Back</div>
                </NavLink>
                <NavLink to={`/movies/${"best"}`} className="next hu" style={selectedOption ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <div>Next</div>
                </NavLink>
            </Box>
            <Footer />
        </>
    );
};

export default Question6;