import React,{ Fragment } from 'react'
import { connect } from 'react-redux'
import { createAnecdoteAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = ( props ) => {

    const createAnecdote = async ( event ) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdoteAction( content )
    }

    return (
        <Fragment>
            <h2>create new</h2>
            <form onSubmit={ createAnecdote }>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </Fragment>
    )
}


const mapDispatchToProps = {
    createAnecdoteAction
}

const ConnectedAnecdoteForm = connect( null,mapDispatchToProps )( AnecdoteForm )
export default ConnectedAnecdoteForm