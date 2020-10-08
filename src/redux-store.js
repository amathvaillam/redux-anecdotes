import { createStore,combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore( combineReducers( {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
} ),composeWithDevTools() )

export default store;