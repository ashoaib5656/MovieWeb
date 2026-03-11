/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import "./Questions.css";
import Footer from "./Footer";
import HeaderComp from "./HeaderComp";

const Question2 = () => {

    const navigate = useNavigate();

    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login")
      }
    },[navigate])

    const [checkedOption, setCheckedOption] = useState("");

    const handleCheck = (key: any) => {
        setCheckedOption(key);
    };

    const calculateBackgroundColor = (key: any) => {
        return checkedOption === key ? { backgroundColor: "rgba(231,76,60,1)" } : {};
    };

    return (
        <>
        <HeaderComp/>
            <Box id={"banner2"} className={"Banner_container"}>
                <div className="box_top">
                    <h2>2. What comes closest to your occasion?</h2>
                </div>
                <ul className="occasion">
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("justWatching")}
                        style={calculateBackgroundColor("justWatching")}
                    >
                        <input type="checkbox" checked={checkedOption === "justWatching"} />
                        <span className="oc_tex">Just Watching Movie by Myself</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("movieDate")}
                        style={calculateBackgroundColor("movieDate")}
                    >
                        <input type="checkbox" checked={checkedOption === "movieDate"} />
                        <span className="oc_tex">Movie Date</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("dateNight")}
                        style={calculateBackgroundColor("dateNight")}
                    >
                        <input type="checkbox" checked={checkedOption === "dateNight"} />
                        <span className="oc_tex">Date Night With Boyfriend or Girlfriend</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("movieNight")}
                        style={calculateBackgroundColor("movieNight")}
                    >
                        <input type="checkbox" checked={checkedOption === "movieNight"} />
                        <span className="oc_tex">Movie Night With Friends</span>
                    </li>
                    <li
                        className="occasion1"
                        onClick={() => handleCheck("familyMovieNight")}
                        style={calculateBackgroundColor("familyMovieNight")}
                    >
                        <input type="checkbox" checked={checkedOption === "familyMovieNight"} />
                        <span className="oc_tex">Watching Movie With Family</span>
                    </li>
                </ul>
                <NavLink to={"/question1"}  className="back">
                    <div><i className="fa-solid fa-arrow-left"></i>Back</div>
                </NavLink>
                <NavLink to={"/question3"} className="next">
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

export default Question2;
