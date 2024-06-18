import "slick-carousel/slick/slick.css";


import "../styles/MatchPage.css"
import Slider from "react-slick";
import {Profile} from "./Profile.tsx";
export const Match = () => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className={"match-slider"}>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
        </Slider>
    );
};