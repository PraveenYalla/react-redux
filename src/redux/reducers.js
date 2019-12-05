
import * as types from './constants';
import { combineReducers } from 'redux';
const initialData = [];


const TodoReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return [
                ...state,
                {
                    text: action.data
                }
            ]
        default:
            return state;
    }
}

const initialNumber = {
    number: 0
};

const NumberReducer = (state = initialNumber, action) => {
    switch (action.type) {
        case types.INCREASE:
            return {
                ...state,
                number: ++state.number
            }
        case types.DECREASE:
            return {
                ...state,
                number: (state.number <= 0) ? 0 : --state.number
            }
        case types.ADD_NUMBER:
            return {
                ...state,
                number: action.num
            }
        default:
            return state;
    }
}


const rootReducers = combineReducers({
    TodoReducer,
    NumberReducer
})

export default rootReducers;