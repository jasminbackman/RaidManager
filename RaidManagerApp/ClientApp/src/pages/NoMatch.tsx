import { Typography } from "@mui/material";
import React from "react";

const NoMatch = () => {
    console.log("no match");
    return (
        <React.Fragment>
            <Typography variant="h3" gutterBottom>
                Page was not found
            </Typography>
        </React.Fragment>
    );
};

export default NoMatch;