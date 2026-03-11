/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import "./Questions.css";
import HeaderComp from "./HeaderComp";

const Question5 = () => {


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
            <Box id={"banner2"} className={"Banner_container"}>
                <div className="box_top">
                    <h2>5. How Old would you like the movie to be?</h2>
                </div>
                <ul className="occasion">
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("Doesn't Matter")}
                        style={calculateBackgroundColor("Doesn't Matter")}
                    >
                        <input type="checkbox" checked={selectedOption === "Doesn't Matter"} />
                        <span className="oc_tex">Doesn't Matter</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("Published in Last 3 Years")}
                        style={calculateBackgroundColor("Published in Last 3 Years")}
                    >
                        <input type="checkbox" checked={selectedOption === "Published in Last 3 Years"} />
                        <span className="oc_tex">Published in Last 3 Years</span>
                    </li>
                    <li  className="occasion1"
                        onClick={() => handleCheck("Published in Last 5 Years")}
                        style={calculateBackgroundColor("Published in Last 5 Years")}>
                        <input type="checkbox" checked={selectedOption === "Published in Last 5 Years"} />
                        <span className="oc_tex">Published in Last 5 Years</span>
                    </li>
                    <li  className="occasion1"
                        onClick={() => handleCheck("Published in Last 10 Years")}
                        style={calculateBackgroundColor("Published in Last 10 Years")}>
                        <input type="checkbox" checked={selectedOption === "Published in Last 10 Years"} />
                        <span className="oc_tex">Published in Last 10 Years</span>
                    </li>
                    <li  className="occasion1"
                        onClick={() => handleCheck("Published in Last 15 Years")}
                        style={calculateBackgroundColor("Published in Last 15 Years")}>
                        <input type="checkbox" checked={selectedOption === "Published in Last 15 Years"}/>
                        <span className="oc_tex">Published in Last 15 Years</span>
                    </li>
                </ul>
                <NavLink to={"/question4"}  className="back">
                    <div><i className="fa-solid fa-arrow-left"></i>Back</div>
                </NavLink>
                <NavLink to={"/question6"} className="next" style={selectedOption ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <div>Next</div>
                </NavLink>

                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="iframe_div">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </Box>
            <Footer />
        </>
    );
};

export default Question5;
