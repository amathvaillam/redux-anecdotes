
export const notificationAction = ( message,duration ) => {
    return async dispatch => {
        dispatch( { type: 'DISPLAY',message: message,} )
        window.timeout = setTimeout( () => {
            dispatch( { type: 'HIDE' } )
        },duration * 1000 )
    }
}
const notificationReducer = ( state = '',action ) => {
    switch ( action.type )
    {
        case "DISPLAY": {
            if ( state )
                clearTimeout( window.timeout )
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