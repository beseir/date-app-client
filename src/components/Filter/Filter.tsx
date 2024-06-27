import "./Filter.css"
import {FilterItem} from "./FilterItem.tsx";
import {RangeSlider} from "./RangeSlider.tsx";
import {SexSelect} from "./SexSelect.tsx";
import {InterestsSelect} from "./InterestsSelect.tsx";
import AimSelect from "./AimSelect.tsx";
import {Divider} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

export const Filter = () => {
          const navigate = useNavigate();
           const onButtonClick = useCallback((path:string) => {
               navigate(path);
           }, []);
    return (
        <div className={"filter"}>
            <h3 className={"filter-header"}>Давай определимся кого мы ищем!</h3>
            <Divider component="li"/>
            <FilterItem  Child={RangeSlider} label={"Возраст"}/>
            <FilterItem  Child={SexSelect} label={"Пол"}/>
            <FilterItem  Child={AimSelect} label={"Цель"}/>
            <FilterItem  Child={InterestsSelect} label={"Интересы"}/>
            <FilterItem  Child={InterestsSelect} label={"Red Flags"}/>
           <div onClick={() => onButtonClick("/home")} className={"filter-option"}><button className={"menu-button accept-button"}><span className={"joypixels"}>✨</span>Принять</button>                               </div>
        </div>

    );
};