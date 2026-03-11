/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Questions.css";
import Footer from "./Footer";
import HeaderComp from "./HeaderComp";

const Question3 = () => {

    const navigate = useNavigate();

    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login")
      }
    },[navigate])

    const [selectedGenres, setSelectedGenres] = useState<any>([]);

    const handleCheck = (genre:any) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((selectedGenre:any) => selectedGenre !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    const isGenreSelected = (genre:any) => {
        return selectedGenres.includes(genre);
    };

    const setBackgroundColor = (genre:any) => {
        return isGenreSelected(genre) ? { backgroundColor: "rgba(231,76,60,1)" } : {};
    };

    return (
        <>
        <HeaderComp/>
            <Box id={"banner22"} className={"Banner_container"}>
                <div id={"topss"}>
                    <h3>3. Please choose any genre you’re interested in.</h3>
                </div>
                <div className="occasions">
                    <li onClick={() => handleCheck("Action")} style={setBackgroundColor("Action")}>
                        <input type="checkbox" checked={isGenreSelected("Action")} />
                        <span>Action</span>
                    </li>
                    <li onClick={() => handleCheck("Mystery")} style={setBackgroundColor("Mystery")}>
                       <input type="checkbox" checked={isGenreSelected("Mystery")} />
                       <span>Mystery</span>
                   </li>
                   <li onClick={() => handleCheck("Comedy")} style={setBackgroundColor("Comedy")}>
                       <input type="checkbox" checked={isGenreSelected("Comedy")} />
                    <span>Comedy</span>
                    </li>
                    <li onClick={() => handleCheck("Biography")} style={setBackgroundColor("Biography")}>
                        <input type="checkbox" checked={isGenreSelected("Biography")} />
                        <span>Biography</span>
                    </li>
                    <li onClick={() => handleCheck("Drama")} style={setBackgroundColor("Drama")}>
                        <input type="checkbox" checked={isGenreSelected("Drama")}/>
                        <span>Drama</span>
                    </li>
                    <li onClick={() => handleCheck("History")} style={setBackgroundColor("History")}>
                        <input type="checkbox" checked={isGenreSelected("History")} />
                        <span>History</span>
                    </li>
                    <li onClick={() => handleCheck("Adventure")} style={setBackgroundColor("Adventure")}>
                        <input type="checkbox" checked={isGenreSelected("Adventure")} />
                        <span>Adventure</span>
                    </li>
                    <li onClick={() => handleCheck("Animation")} style={setBackgroundColor("Animation")}>
                        <input type="checkbox" checked={isGenreSelected("Animation")} />
                        <span>Animation</span>
                    </li>
                    <li onClick={() => handleCheck("Thriller")} style={setBackgroundColor("Thriller")}>
                        <input type="checkbox" checked={isGenreSelected("Thriller")} />
                        <span>Thriller</span>
                    </li>
                    <li onClick={() => handleCheck("Crime")} style={setBackgroundColor("Crime")}>
                        <input type="checkbox" checked={isGenreSelected("Crime")}/>
                        <span>Crime</span>
                    </li>
                    <li onClick={() => handleCheck("Sport")} style={setBackgroundColor("Sport")}>
                        <input type="checkbox" checked={isGenreSelected("Sport")}/>
                        <span>Sport</span>
                    </li>
                    <li onClick={() => handleCheck("Romance")} style={setBackgroundColor("Romance")}>
                        <input type="checkbox" checked={isGenreSelected("Romance")} />
                        <span>Romance</span>
                    </li>
                    <li onClick={() => handleCheck("Disaster")} style={setBackgroundColor("Disaster")}>
                        <input type="checkbox" checked={isGenreSelected("Disaster")} />
                        <span>Disaster</span>
                    </li>
                    <li onClick={() => handleCheck("Science Fiction")} style={setBackgroundColor("Science Fiction")}>
                        <input type="checkbox" checked={isGenreSelected("Science Fiction")} />
                        <span>Science Fiction</span>
                    </li>
                    <li onClick={() => handleCheck("Western")} style={setBackgroundColor("Western")}>
                        <input type="checkbox" checked={isGenreSelected("Western")} />
                        <span>Western</span>
                    </li>
                    <li onClick={() => handleCheck("Fantasy")} style={setBackgroundColor("Fantasy")}>
                        <input type="checkbox" checked={isGenreSelected("Fantasy")} />
                        <span>Fantasy</span>
                    </li>
                    <li onClick={() => handleCheck("War")} style={setBackgroundColor("War")}>
                        <input type="checkbox" checked={isGenreSelected("War")} />
                        <span>War</span>
                    </li>
                    <li onClick={() => handleCheck("Family")} style={setBackgroundColor("Family")}>
                        <input type="checkbox" checked={isGenreSelected("Family")} />
                        <span>Family</span>
                    </li>
                    <li onClick={() => handleCheck("Horrer")} style={setBackgroundColor("Horrer")}>
                        <input type="checkbox" checked={isGenreSelected("Horrer")} />
                        <span>Horrer</span>
                    </li>
                    <li onClick={() => handleCheck("Actions")} style={setBackgroundColor("Actions")}>
                        <input type="checkbox" checked={isGenreSelected("Actions")} />
                        <span>Actions</span>
                    </li>
                </div>
                <NavLink to={"/question2"}  className="back">
                    <div><i className="fa-solid fa-arrow-left"></i>Back</div>
                </NavLink>
                <NavLink to={"/question4"} className="next next2">
                    <div>Next</div>
                </NavLink>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="iframe_div">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vYL2wfmF3OQ?si=Pss_-qLH8pnCiZO-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </Box>
            <Footer/>
        </>
    );
};

export default Question3;