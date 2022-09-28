export const emptyCartAction = () => {
    return { type: 'EMPTY_CART', payload: '' }
}


export const addToCartAction = (payload) => {
    return { type: 'ADD_TO_CART', payload: payload }
}
