import { Raid, RaidState } from "../../entities/Raid";
import { Action } from "../../entities/Action";
import { RecordOf, Record, Map, fromJS } from "immutable";

export const initialState: Map<string, any> = Map({
    data: []
});

const ActionTypes = {
    LOAD: "RAIDERS:LOAD",
    LOAD_SUCCESS: "RAIDERS:LOAD_SUCCESS",
    LOAD_FAIL: "RAIDERS:LOAD_FAIL"
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

export const loadRaiders = (): Actions => {
    return { type: ActionTypes.LOAD };
}

export const loadRaidersSuccess = (payload: Raid[]): Actions => {
    return { type: ActionTypes.LOAD_SUCCESS, payload };
}

export const loadRaidersFail = (error: string): Actions => {
    return { type: ActionTypes.LOAD_FAIL, payload: error };
}

export default reducer;