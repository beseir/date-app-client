import "../styles/Profile.css"
import React from "react";

interface UserProfile {
    data:{
        profileImageURL: string,
        description: string,
        username: string,
        bgColor: string;
    }

}
export const Profile: React.FC<UserProfile> =  ({data:{username, bgColor, profileImageURL, description}}) => {
    return (
        <div className={"profile"} style={{backgroundColor:bgColor}} >
            <div className={"profile-header"}>
                <img src={profileImageURL} alt={"profile picture"} className={"profile-image"}/>
                <h2 className={"username-text"}>{username}</h2>
            </div>


            <div className={"profile-card"} >{description}</div>
        </div>
    );
};