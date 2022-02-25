import React, { useReducer } from "react";
import { RaidState } from "../entities/Raid";
import reducer, { initialState } from "../reducers/raid/reducer";

const RaidDispatch = React.createContext<any>(null);

const Raids = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <RaidDispatch.Provider value={dispatch}>
            test
        </RaidDispatch.Provider>
    );
};

export default Raids;