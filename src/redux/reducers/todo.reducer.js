
export const todoReducer = (state = [], action) => {


    switch (action.type) {
        case "GET_ALL_TODOS":
            return [...action.payload]
        case "ADD_TODO":
            return [...state, action.payload]
        case "LOAD":
            return [...action.payload]

        default:
            return state;
    }

}

