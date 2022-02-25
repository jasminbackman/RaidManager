import { Grid, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { RaidState } from "../entities/Raid";
import reducer, { initialState } from "../reducers/raider/reducer";

const RaiderDispatch = React.createContext<any>(null);

const Raiders = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("raiders");
    return (
        <RaiderDispatch.Provider value={dispatch}>
            <Grid item xs={12}>
                <Typography variant="h4">Raiders</Typography>
            </Grid>
        </RaiderDispatch.Provider>
    );
};

export default Raiders;