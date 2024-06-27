import {Box, FormControl, StyledEngineProvider} from "@mui/material";
import React from "react";

type FilterProp = {
    label: string
    Child: React.ComponentType;
}

export const FilterItem: React.FC<FilterProp> = ({label, Child}) => {

    return (
        <>
            <h2 className={"filter-label"}>{label}</h2>
            <div className={"filter-option"}>

                <Box sx={{width: "90vw"}} className={"box"}>
                    <StyledEngineProvider injectFirst>
                        <FormControl fullWidth>
                          <Child/>
                        </FormControl>
                    </StyledEngineProvider>
                </Box>
            </div>

        </>
    );
};