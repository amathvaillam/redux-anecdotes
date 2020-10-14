import React,{ Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdoteAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = ( props ) => {

    const dispatch = useDispatch()

    const createAnecdote = async ( event ) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch( createAnecdoteAction( content ) )
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

export default AnecdoteForm