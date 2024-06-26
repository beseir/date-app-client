import "../../styles/Profile.css"
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import {SwiperOptions} from "swiper/types";
import {UserProfile} from "../../types.ts";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {Divider} from "@mui/material";



export const Profile: React.FC<UserProfile> =  ({data:{username, age, profileImageURL, description}}) => {
const swiperOptions: SwiperOptions ={
    grabCursor:true,
    modules:[Pagination],
    speed:500,
    initialSlide: 1,
    shortSwipes:true,
    loopPreventsSliding: true,
    touchRatio: 1.6,
   pagination:true
}

    return (
        <div className={"profile"} >
            <div className={"profile-header"}>
                <div className={"avatarIcon"} style={{position:"relative"}}>
                    <img src={profileImageURL} alt={"profile picture"} className={"profile-image"}/>
                </div>
                <div className={"user-info"}>
                    <h2 className={"username-text"}>{username}, {age}</h2>
                </div>
            </div>
            <Divider/>

            <Swiper  className={"mySwiper"}{...swiperOptions}
                style={{transitionTimingFunction: 'ease-in-out'}}>
                <SwiperSlide><div className={"profile-card"}>{description}</div></SwiperSlide>
                <SwiperSlide><div className={"profile-card"}>Вот моя фоточка: <img alt={"card"} className={"image-card"} src={"./pasha/photo_2024-03-13_12-34-57.jpg"}/></div></SwiperSlide>
                <SwiperSlide><div className={"profile-card"}>{description}</div></SwiperSlide>
            </Swiper>

        </div>
    );
};