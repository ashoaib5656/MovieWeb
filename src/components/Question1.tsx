/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box } from "@mui/material";
import "./Questions.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HeaderComp from "./HeaderComp";

const Question1 = () => {

    const navigate = useNavigate();

    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login")
      }
    },[navigate])

    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleClick = (emoji: any) => {
        setSelectedEmoji(emoji);
    };

    return (
        <>
        <HeaderComp/>
            <Box id={"banner2"} className={"Banner_container"}>
                <div className="box_top">
                    <h2>1. How are you today?</h2>
                </div>
                <div className="emoji">
                    <div
                        className={`emoji1 ${selectedEmoji === "happy" ? "selected" : ""}`}
                        onClick={() => handleClick("happy")}
                    >
                        <div className="emojitop">
                            <i className="fa-regular fa-face-smile"></i>
                        </div>
                        <div className="emojibottom">Happy</div>
                    </div>
                    <div
                        className={`emoji1 ${selectedEmoji === "neutral" ? "selected" : ""}`}
                        onClick={() => handleClick("neutral")}
                    >
                        <div className="emojitop">
                            <i className="fa-regular fa-face-meh"></i>
                        </div>
                        <div className="emojibottom">Neutral</div>
                    </div>
                    <div
                        className={`emoji1 ${selectedEmoji === "sad" ? "selected" : ""}`}
                        onClick={() => handleClick("sad")}
                    >
                        <div className="emojitop">
                            <i className="fa-regular fa-face-frown-open"></i>
                        </div>
                        <div className="emojibottom">Sad</div>
                    </div>
                </div>

                <NavLink to={"/"}  className="back">
                    <div><i className="fa-solid fa-arrow-left"></i>Back</div>
                </NavLink>

                <NavLink to={"/question2"} style={selectedEmoji ? { visibility: "visible" } : { visibility: "hidden" }} className="next">
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
            <Footer/>
        </>
    );
};

export default Question1;
