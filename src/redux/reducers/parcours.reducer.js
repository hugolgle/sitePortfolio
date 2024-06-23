import { GET_PARCOURS } from "../actions/parcours.action";

const initialState = [];

export default function parcoursReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARCOURS:
            return action.payload;
        default:
            return state;
    }
}
