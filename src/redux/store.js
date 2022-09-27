import {createStore} from 'redux'

const MyReducer = (state = [] , action) =>{
    if(action.type === 'ADD_BOOK'){
        return [...state, action.paylode]
    }
    
    if(action.type === 'DELETE_BOOK'){
        return state.filter(book => book.id != action.paylode )
    }

    return state
}

export const store = createStore(MyReducer)
