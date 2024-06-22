import "../styles/Buttons.css"
import React from "react";

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;

}
export const BottomBar: React.FC<ButtonProps> = ({ onClick}) => {
    return (
        <div className={"bar-container"}>
            <div className={"bottom-bar"}>
                <div onClick={onClick} className={"button-bar dislike"}>dislike 💀</div>
                <div onClick={onClick} className={"button-bar like"}>like ❤️</div>
            </div>
        </div>

    );
};