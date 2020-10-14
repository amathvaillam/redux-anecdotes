import { createStore,combineReducers,applyMiddleware } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore( combineReducers( {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
} ),composeWithDevTools(
    applyMiddleware( thunk )
) )

export default store;