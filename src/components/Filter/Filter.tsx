import "./Filter.css"
import {FilterItem} from "./FilterItem.tsx";
import {RangeSlider} from "./RangeSlider.tsx";
import {SexSelect} from "./SexSelect.tsx";

export const Filter = () => {

    return (
        <div className={"filter"}>
            <FilterItem  Child={RangeSlider} label={"Возраст"}/>
            <FilterItem  Child={SexSelect} label={"Пол"}/>
        </div>

    );
};