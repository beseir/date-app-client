import "../styles/Profile.css"
import React from "react";

interface Props {
    data:{
        profileImageURL: string,
        description: string,
        username: string,
        bgColor: string;
    }

}
export const Profile: React.FC<Props> = ({data:{username, bgColor, profileImageURL, description}}) => {
    return (
        <div className={"profile-card"} style={{backgroundColor:bgColor}} >
            <img src={profileImageURL} alt={"profile picture"} className={"profile-image"}/>
            <h2 className={"username-text"}>{username}</h2>
            <p className={"description-text"} >{description}</p>
        </div>
    );
};