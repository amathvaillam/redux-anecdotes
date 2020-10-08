export const filterAction = ( input ) => ( { type: 'FILTER',input: input } )

const filterReducer = ( state = 'ALL',action ) => {
    switch ( action.type )
    {
        case "FILTER": {
            return action.input
        }
        default: {
            return state
        }
    }
}

export default filterReducer 