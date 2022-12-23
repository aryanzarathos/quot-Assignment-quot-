import USER_ACTION_TYPES from "./ActionTypes"
import axios from "axios"

export const getAdminCourseList = () => {
    return async dispatch  => {

        dispatch({
            type: USER_ACTION_TYPES.GET_USER_DETAILS_LOADING,
            payload: [],
        })
       await axios.get("https://zarathos.tech/liveproject/CrudUserGet").then((success)=>{
            dispatch({
                type: USER_ACTION_TYPES.GET_USER_DETAILS_DATA,
                payload: success.data,
            })
        }).catch((error)=>{
            dispatch({
                type: USER_ACTION_TYPES.GET_USER_DETAILS_DATA,
                payload: [],
            })
        })
        

    }
}
export const getSingleAdminCourseList = (id) => {
    return async dispatch  => {

        dispatch({
            type: USER_ACTION_TYPES.GET_SINGLE_USER_DETAILS_LOADING,
            payload: [],
        })
       await axios.get(`https://zarathos.tech/liveproject/CrudSingleUserGet?id=${id}`).then((success)=>{
            dispatch({
                type: USER_ACTION_TYPES.GET_SINGLE_USER_DETAILS_DATA,
                payload: success.data,
            })
        }).catch((error)=>{
            dispatch({
                type: USER_ACTION_TYPES.GET_SINGLE_USER_DETAILS_DATA,
                payload: [],
            })
        })
        

    }
}

export const postAdminCourseList = (data) => {
    return async dispatch  => {

        dispatch({
            type: USER_ACTION_TYPES.POST_USER_DETAILS_LOADING,
            payload: [],
        })
       await axios.post("https://zarathos.tech/liveproject/CrudUserPost",data).then((success)=>{
            dispatch({
                type: USER_ACTION_TYPES.POST_USER_DETAILS_DATA,
                payload: success.data,
            })
        }).catch((error)=>{
            dispatch({
                type: USER_ACTION_TYPES.POST_USER_DETAILS_DATA,
                payload: [],
            })
        })
    }
}
export const postAdminCourseListRESET = () => {
    return async dispatch  => {

        dispatch({
            type: USER_ACTION_TYPES.POST_USER_DETAILS_RESET,
            payload: [],
        })
    }
}

export const deleteAdminCourseList = (id) => {
    return async dispatch  => {

        dispatch({
            type: USER_ACTION_TYPES.DELETE_USER_DETAILS_LOADING,
            payload: [],
        })
       await axios.delete(`https://zarathos.tech/liveproject/CrudUserDelete?id=${id}`).then((success)=>{
            dispatch({
                type: USER_ACTION_TYPES.DELETE_USER_DETAILS_DATA,
                payload: success.data,
            })
        }).catch((error)=>{
            dispatch({
                type: USER_ACTION_TYPES.DELETE_USER_DETAILS_DATA,
                payload: [],
            })
        })
        

    }
}
export const editAdminCourseList = (data,id) => {
    return async dispatch  => {

        dispatch({
            type: USER_ACTION_TYPES.EDIT_USER_DETAILS_LOADING,
            payload: [],
        })
       await axios.patch(`https://zarathos.tech/liveproject/CrudUserEdit?id=${id}`,data).then((success)=>{
            dispatch({
                type: USER_ACTION_TYPES.EDIT_USER_DETAILS_DATA,
                payload: success.data,
            })
        }).catch((error)=>{
            dispatch({
                type: USER_ACTION_TYPES.EDIT_USER_DETAILS_DATA,
                payload: [],
            })
        })
        

    }
}