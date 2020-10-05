import React,{ Fragment } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'

const AnecdoteList = ( props ) => {

    const dispatch = useDispatch()

    const vote = ( id ) => {
        console.log( 'vote',id )
        dispatch( voteAction( id ) )
    }
    const anecdotes = useSelector( state => state )

    return (
        <React.Fragment>
            { anecdotes.map( anecdote =>
                <div key={ anecdote.id }>
                    <div>
                        { anecdote.content }
                    </div>
                    <div>
                        has { anecdote.votes }
                        <button onClick={ () => vote( anecdote.id ) }>vote</button>
                    </div>
                </div>
            ) }
        </React.Fragment>
    )
}

export default AnecdoteList