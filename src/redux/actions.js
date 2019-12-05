
import * as types from './constants';

export const createTodo = data => ({
        type: types.CREATE_TODO,
        data
})

export const increase = () => ({
        type: types.INCREASE
})

export const decrease = () => ({
        type: types.DECREASE
})

export const addNumber = (num) => ({
        type: types.ADD_NUMBER,
        num
})
