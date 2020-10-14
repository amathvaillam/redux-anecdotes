
export const notificationAction = ( message,duration ) => {
    return async dispatch => {
        dispatch( { type: 'DISPLAY',message: message } )
        setTimeout( () => {
            dispatch( { type: 'HIDE' } )
        },duration * 1000 )
    }
}
const notificationReducer = ( state = '',action ) => {
    switch ( action.type )
    {
        case "DISPLAY": {
            return action.message
        }
        case "HIDE": {
            return ''
        }
        default: {
            return state
        }
    }
}

export default notificationReducer 