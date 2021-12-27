import { Raid, RaidState } from "../../entities/Raid";
import { Action } from "../../entities/Action";
import { getReturnType } from "../../utilities/ReturnTypeHelper";
import { RecordOf, Record, Map, fromJS } from "immutable";

export const initialState: Map<string, any> = Map({
    data: []
});

const ActionTypes = {
    LOAD: "RAIDS:LOAD",
    LOAD_SUCCESS: "RAIDS:LOAD_SUCCESS",
    LOAD_FAIL: "RAIDS:LOAD_FAIL"
};

type Actions =
    Action<typeof ActionTypes.LOAD, void>
    | Action<typeof ActionTypes.LOAD_SUCCESS, Raid[]>
    | Action<typeof ActionTypes.LOAD_FAIL, string>;

const reducer = (state: Map<string, any> = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.LOAD:
            return state.set("loading", true);
            
        case ActionTypes.LOAD_SUCCESS:
            return state
                .set("loading", false)
                .set("data", action.payload);

        case ActionTypes.LOAD_FAIL:
            return state
                .set("loading", false)
                .set("error", action.payload);
        default:
            return state;
    }
};

export const loadRaids = (): Actions => {
    return { type: ActionTypes.LOAD };
}

export const loadRaidsSuccess = (payload: Raid[]): Actions => {
    return { type: ActionTypes.LOAD_SUCCESS, payload };
}

export const loadRaidsFail = (error: string): Actions => {
    return { type: ActionTypes.LOAD_FAIL, payload: error };
}

export default reducer;