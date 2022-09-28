
export const cartReducer = (state = [], action) => {


    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload]

        case "EMPTY_CART":
            return []

        default:
            return state;
    }

}



//add to cart => ACTION TYPE   -> cart item -> PAYLOAD
//empty cart  => ACTION TPYE
//remove item


