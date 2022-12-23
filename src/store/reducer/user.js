const InititalState={
    list:{
        loading:false,
        data:[],
        success:false,
    },
    delete:{
        loading:false,
        data:[],
        success:false,
    },
    update:{
        loading:false,
        data:[],
        success:false,
    },
    create:{
        loading:false,
        data:[],
        success:false,
    },
}

const user = (state = InititalState, { type, payload }) => {
switch (type) {
    case "GET_USER_DETAILS_LOADING":
        return ({
            ...state,
            list: {
                ...state.list,
                data: [],
                loading: true,
                success: false,
            }
        })

    case "GET_USER_DETAILS_DATA":
        return ({
            ...state,
            list: {
                ...state.list,
                data: payload,
                loading: false,
                success: true,
            }
        })

    case "POST_USER_DETAILS_LOADING":
        return ({
            ...state,
            create: {
                ...state.create,
                data: [],
                loading: false,
                success: false,
            }

        })

    case "POST_USER_DETAILS_DATA":
        return ({
            ...state,
            create: {
                ...state.create,
                data: payload,
                loading: false,
                success: true,
            }, list: {
                ...state.list,
                data: state.list.data.concat(payload),
                loading: false,
                success: true,
            },
        })

    case "EDIT_USER_DETAILS_LOADING":
        return ({
            ...state,
            edit: {
                ...state.edit,
                data: [],
                loading: true,
                success: false,
            }
        })
    case "EDIT_USER_DETAILS_DATA":
        return ({
            ...state,
            create: {
                ...state.create,
                data: payload,
                loading: false,
                success: true,
            }, list: {
                ...state.list,
                data: state.list.data.map(
                    (content) => content._id === payload._id ? {
                        ...content, ...payload
                    }
                        : content),
                loading: false,
                success: true,
            },
        })
    case "DELETE_USER_DETAILS_LOADING":
        return ({
            ...state,
            delete: {
                ...state.delete,
                data: [],
                loading: true,
                success: false,
            }
        })
    case "DELETE_USER_DETAILS_DATA":
        return ({
            ...state,
            delete: {
                ...state.delete,
                data: payload,
                loading: false,
                success: true,
            },list: {
                ...state.list,
                data: state.list.data.filter((item) => item._id !== payload),
                loading: false,
                success: true,
            },
        })
    default:
       return  state
}
}
export default user