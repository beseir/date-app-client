import "slick-carousel/slick/slick.css";
import "../styles/MatchPage.css"

import Slider from "react-slick";
import {Profile} from "./Profile.tsx";
import React from "react";

export const Match = () => {
    function getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const settings = {
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const props = () => {
        return{
            profileImageURL: "./assets/test.jpg",
            description: "string",
            username: "Ivan",
            bgColor: getRandomColor(),
        }

    }
    //  {Array.from(leng, (_, index:number) =>  <Profile key = {index} bgColor={"#3d0a42"}/>)}
    return (
        <Slider {...settings} className={"match-slider"}>
            {Array.from({ length: 120 }).map((_, index) => (
                <React.Fragment key={index}>{<Profile data={props()}/>}</React.Fragment>
            ))}
        </Slider>
    );
};