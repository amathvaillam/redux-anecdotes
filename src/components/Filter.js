import React from 'react'
import { connect } from 'react-redux'
import { filterAction } from '../reducers/filterReducer'

const Filter = ( props ) => {
    const handleChange = ( event ) => {
        // input-field value is in variable event.target.value
        let value = event.target.value
        value === '' ?
            props.filterAction( 'ALL' ) :
            props.filterAction( value )
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

const mapDispatchToProps = {
    filterAction,
}

const ConnectedFilter = connect( null,mapDispatchToProps )( Filter )
export default ConnectedFilter