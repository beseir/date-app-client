import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";

export const SexSelect = () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'Without label'}}
                >
                    <MenuItem value={"male"}>Мужской</MenuItem>
                    <MenuItem value={"female"}>Женский</MenuItem>
                    <MenuItem value={"doesntMatter"}>Неважно</MenuItem>
                    <MenuItem value={"other"}>Другой</MenuItem>
                </Select>
            </FormControl>
    );
};