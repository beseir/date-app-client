import "../styles/Buttons.css"
import React from "react";


interface ButtonProps {
    onLike: (event: React.MouseEvent<HTMLDivElement>) => void;
    onDislike: (event: React.MouseEvent<HTMLDivElement>) => void;

}
export const BottomBar: React.FC<ButtonProps> = ({ onLike, onDislike}) => {
    return (
        <div className={"bar-container"}>
            <div className={"bottom-bar"}>
                <div onClick={onDislike} id ="dislike" className={"button-bar dislike"}>dislike 💀</div>
                <div onClick={onLike}  id="like" className={"button-bar like"}>like ❤️</div>
            </div>
        </div>

    );
};