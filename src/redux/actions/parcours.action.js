import axios from 'axios';

export const GET_PARCOURS = "GET_PARCOURS";

export const getParcours = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/parcours").then((res) => {
            dispatch({ type: GET_PARCOURS, payload: res.data });
        });
    };
};
