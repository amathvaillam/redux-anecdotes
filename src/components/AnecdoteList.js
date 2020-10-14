import React,{ Fragment } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationAction } from '../reducers/notificationReducer'
import { hideNotificationAction } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {

    const dispatch = useDispatch()

    const vote = ( id ) => {
        console.log( 'vote',id )
        dispatch( voteAction( id ) )
    }

    const anecdotes = useSelector( state => {
        if ( state.filter === "ALL" )
            return state.anecdotes
        return ( state.anecdotes.filter( anecdote => anecdote.content.includes( state.filter ) ) )
    } )

    return (
        <React.Fragment>
            { anecdotes.map( anecdote =>
                <div key={ anecdote.id }>
                    <div>
                        { anecdote.content }
                    </div>
                    <div>
                        has { anecdote.votes }
                        <button onClick={ () => {
                            vote( anecdote )
                            dispatch( notificationAction( anecdote.content ) )
                            setTimeout( () => {
                                dispatch( hideNotificationAction( '' ) )
                            },5000 )
                        } }>vote</button>
                    </div>
                </div>
            ) }
        </React.Fragment>
    )
}

export default AnecdoteList