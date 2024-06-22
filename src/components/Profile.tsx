import "../styles/Profile.css"
import React from "react";
import {EffectCards} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import {SwiperOptions} from "swiper/types";
import {UserProfile} from "../types.ts";


export const Profile: React.FC<UserProfile> =  ({data:{username, location, age, profileImageURL, description}}) => {
const swiperOptions: SwiperOptions ={
    effect:'cards',
    grabCursor:true,
    modules:[EffectCards],
    speed:550,

    shortSwipes:false,
    longSwipes: true,
    longSwipesMs: 100
}

    return (
        <div className={"profile"} >
            <div className={"profile-header"}>
                <div style={{position:"relative"}}>
                    <div className={"sex"}>
                        <img src={"./assets/malese.png"} alt={"male"}/>
                    </div>
                    <img src={profileImageURL} alt={"profile picture"} className={"profile-image"}/>
                </div>

                <div className={"user-info"}>
                    <h2 className={"username-text"}>{username}, {age}</h2>
                    <p>{location.country}, {location.city}</p>
                </div>

            </div>

            <Swiper  className={"mySwiper"}{...swiperOptions}>
                <SwiperSlide><div className={"profile-card"}>{description}</div></SwiperSlide>
                <SwiperSlide><div className={"profile-card"}>{description}</div></SwiperSlide>
                <SwiperSlide><div className={"profile-card"}>{description}</div></SwiperSlide>
            </Swiper>

        </div>
    );
};