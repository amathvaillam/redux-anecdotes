import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAction } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = ( event ) => {
        // input-field value is in variable event.target.value
        let value = event.target.value
        value === '' ?
            dispatch( filterAction( 'ALL' ) ) :
            dispatch( filterAction( value ) )
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={ style }>
            filter <input onChange={ handleChange } />
        </div>
    )
}

export default Filter