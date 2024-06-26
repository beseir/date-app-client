import {Slider} from "@mui/material";
import {useState} from "react";

export const RangeSlider = () => {
    const [value, setValue] = useState<number[]>([20, 27]);
    const minDistance = 2;
    const MAX = 40;
    const MIN = 14;


    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        event.preventDefault();
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };
    return (
        <>
            <Slider
                getAriaLabel={() => 'Age'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                disableSwap={false}
                min={MIN}
                max={MAX}

                sx={{color: "white", borderRadius: 15}

                }/>
        </>
    );
};