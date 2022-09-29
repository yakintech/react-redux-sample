import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function TodoList() {

   
    let state = useSelector(state => state);

    console.log('STATE', state);

    return (
        <div>TodoList</div>
    )
}

export default TodoList