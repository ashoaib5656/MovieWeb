/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import "./Questions.css";
import HeaderComp from "./HeaderComp";

const Question4 = () => {

    const navigate = useNavigate();

    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login")
      }
    },[navigate])

    const [selectedOption, setSelectedOption] = useState("");

    const handleCheck = (option:any) => {
        setSelectedOption(option);
    };

    const calculateBackgroundColor = (option:any) => {
        return selectedOption === option ? { backgroundColor: "rgba(231,76,60,1)" } : {};
    };

    return (
        <>
        <HeaderComp/>
            <Box id={"banner2"} className={"Banner_container"}>
                <div className="box_top">
                    <h2 style={{ fontSize: "medium" }}>4. Is the age-appropriateness rating of the movie important to you?</h2>
                </div>
                <ul className="occasion">
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("Yes")}
                        style={calculateBackgroundColor("Yes")}
                    >
                        <input type="checkbox" checked={selectedOption === "Yes"} />
                        <span className="oc_tex">Yes, I would like to choose the ratings that I’m okay with.</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("No")}
                        style={calculateBackgroundColor("No")}
                    >
                        <input type="checkbox" checked={selectedOption === "No"} />
                        <span className="oc_tex">No, it doesn’t matter.</span>
                    </li>
                </ul>
                <NavLink to={"/question3"}  className="back">
                    <div><i className="fa-solid fa-arrow-left"></i>Back</div>
                </NavLink>
                <NavLink to={"/question5"} className="next" style={selectedOption ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <div>Next</div>
                </NavLink>

                <div className="iframe_div">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </Box>
            <Footer />
        </>
    );
};

export default Question4;
