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
        easing:"ease",
        //vertical:true,
        //fade:"true",
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const images:string[] = [
        './pasha/photo_2023-09-28_22-02-49.jpg',
        './pasha/photo_2024-01-06_19-46-53.jpg',
        './pasha/photo_2024-03-13_12-34-57.jpg',
        './pasha/photo_2024-03-13_12-34-59.jpg',
        './pasha/photo_2024-03-13_12-36-31 (4).jpg',
       ' ./pasha/photo_2024-03-13_12-34-59 (2).jpg',
        './pasha/photo_2024-03-13_12-34-59 (4).jpg',
        './pasha/photo_2024-03-13_12-34-59 (6).jpg'
    ];
    const getRandomImage = (): string => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    const props = () => {
        return{
            profileImageURL: getRandomImage(),
            description: "string",
            username: "Paul",
            bgColor: getRandomColor(),
        }

    }
    //  {Array.from(leng, (_, index:number) =>  <Profile key = {index} bgColor={"#3d0a42"}/>)}
    return (
        <Slider {...settings} className={"match-slider"}>
            {Array.from({ length: 40 }).map((_, index) => (
                <React.Fragment key={index}>{<Profile data={props()}/>}</React.Fragment>
            ))}
        </Slider>
    );
};