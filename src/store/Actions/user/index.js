import USER_ACTION_TYPES from "./ActionTypes"
import axios from "axios"

export const getAdminCourseList = async () => {
    return async dispatch  => {

        dispatch({
            type: USER_ACTION_TYPES.GET_USER_DETAILS_LOADING,
            payload: [],
        })
        let data = await axios.get("https://zarathos.tech/liveproject/CrudUserGet")

        dispatch({
            type: USER_ACTION_TYPES.GET_USER_DETAILS_DATA,
            payload: data,
        })

    }
}