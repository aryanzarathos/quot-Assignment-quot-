const pikachu = (state = "", { type, payload }) => {
    switch (type) {
        case "GET_USER":
            return {
                state:payload
            }
            
        default:
           return  state
    }
    }
    export default pikachu