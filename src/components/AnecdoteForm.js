import React,{ Fragment } from 'react'
import anecdoteService from '../services/services'
import { useDispatch } from 'react-redux'
import { createAnecdoteAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = ( props ) => {

    const dispatch = useDispatch()

    const createAnecdote = async ( event ) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const anecdote = await anecdoteService.createNew( content )

        dispatch( createAnecdoteAction( anecdote ) )
    }



    return (
        <React.Fragment>
            <h2>create new</h2>
            <form onSubmit={ createAnecdote }>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </React.Fragment>
    )
}

export default AnecdoteForm