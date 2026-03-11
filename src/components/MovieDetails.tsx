import { useLocation, useNavigate } from "react-router-dom"
import "./MovieDetails.css"
import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import HeaderComp from "./HeaderComp";
import { useEffect } from "react";

const MovieDetails = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("token")){
        navigate("/login")
        }
    },[navigate])

    const data = useLocation();
    const navData = data.state;

    return (
        <>
        <HeaderComp/>
        <div className="movieinfo_container">
            <div className="movieinfo_container_header">
                <h1 className="detail_header">{navData.Title}</h1>
            </div>
            <div className="movie_desc_cont" >
                <img src={navData.Poster} className="movie_poster_head"/>
                <div className="head2">
                    <h3>{navData.Title}</h3>
                    <h4>{navData.Type}</h4>
                    <h4 className="cll">{navData.Year}</h4>
                </div>
            </div>
            <div className="detail_content">
                <p className="lorem_text">
                <sup className="comma">,,</sup> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod maxime dolore magni totam odio tenetur perspiciatis! Ipsum quis autem, natus voluptatem commodi molestias unde, animi cum numquam, omnis facere suscipit?
                Nihil, cumque itaqustiae, cupiditate voluptates accusamus, aperiam alias maiores rem explicabo sint enim quae quis suscipit. Necessitatibus ratione a iusto fugiat ut eum, eaque delectus!
                Repellendus, assumenda repudiandae voluptates maxime iste ipsam commodi, magni quos accusantium, veniam eum! Necessitatibus eveniet sapiente illo adipisci nam laudantium atque eos sed natus autem excepturi maiores quibusdam, vitae minus.
                Voluptatum id quaerat fugit itaque sapiente magni, dolor praesentium dolorum. Quos hic sed ea ut inventore cum, accusamus sint? Porro sit eaque quam veniam itaque molestiae expedita nihil autem rerum.
                 Id totam voluptatibus minus quos, beatae repellendus exercitationem consequuntur voluptates officia consequatur suscipit iste quis. Blanditiis soluta culpa quidem? Facilis, explicabo expedita.
                Odio itaque debitis, saepe earum vitae magnam cum sit unde commodi eligendi culpa, beatae, modi minima? Eaque fuga dolorem excepturi voluptas nesciunt quam ducimus minima eveniet ex laboriosam! Accusantium, delectus.</p>
            </div>
            <div className="watch">
                <div className="trailer"><a className="trailer" href={`https://www.youtube.com/results?search_query=${navData.Title}`}><i className="fa-solid fa-film">&nbsp;&nbsp;</i>TRAILER</a></div>
                <div className="amazon"><a className="amazon" href={`https://www.primevideo.com/search/ref=atv_nb_sug?ie=UTF8&phrase=${navData.Title}`}><i className="fa-solid fa-circle-play">&nbsp;&nbsp;</i>WATCH ON AMAZON.COM</a></div>
            </div>
            <div className="poster">
                <img src={navData.Poster} alt="" />
            </div>
            <div className="sm">
                <div className="sm_head"><h3>SHARE THIS ON</h3></div>
                <div className="bttn">
                    <Button href="https://www.facebook.com" variant="outlined" color="error" sx={{color:"white" ,'&:hover': {color:"#316FF6" , border:"1px solid  #316FF6"}}} startIcon={<FacebookIcon/>}>Facebook</Button>
                    <Button href="https://www.twitter.com" variant="outlined" color="error" sx={{color:"white",'&:hover': {color:"#1DA1F2" , border:"1px solid  #1DA1F2"}}} startIcon={<TwitterIcon/>}>Twitter</Button>
                    <Button href="https://www.reddit.com/" variant="outlined" color="error" sx={{color:"white",'&:hover': {color:" #FF4500" , border:"1px solid   #FF4500"}}} startIcon={<RedditIcon/>}>Reddit</Button>
                    <Button href="https://www.pinterest.com" variant="outlined" color="error" sx={{color:"white",'&:hover': {color:"#E60023" , border:"1px solid  #E60023"}}} startIcon={<PinterestIcon/>}>Pintrest</Button>
                    <Button href="https://www.whatsapp.com/" variant="outlined" color="error" sx={{color:"white",'&:hover': {color:"#25d366" , border:"1px solid  #25d366"}}} startIcon={<WhatsAppIcon/>}>WhatsApp</Button>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default MovieDetails