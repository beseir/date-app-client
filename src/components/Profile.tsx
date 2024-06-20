import "../styles/Profile.css"
import React from "react";

type userLocation = {
    country: string,
    city: string
}
interface UserProfile {
    data:{
        profileImageURL: string,
        description: string,
        username: string,
        age: number,
        location: userLocation;
    }

}
export const Profile: React.FC<UserProfile> =  ({data:{username, location, age, profileImageURL, description}}) => {
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


            <div className={"profile-card"}>{description}</div>
        </div>
    );
};