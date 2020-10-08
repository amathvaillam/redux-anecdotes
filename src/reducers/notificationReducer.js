export const notificationAction = ( message ) => ( { type: 'DISPLAY',message: message } )
export const hideNotificationAction = ( message ) => ( { type: 'HIDE' } )

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