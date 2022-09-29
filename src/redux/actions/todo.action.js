export const getAllTodos = () => {

    return async (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'GET_ALL_TODOS', payload: data })
            })
    }

}


