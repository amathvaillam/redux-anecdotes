import React,{ Fragment } from 'react'
import { connect } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationAction } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {

    const vote = ( id ) => {
        console.log( 'vote',id )
        props.voteAction( id )
    }

    return (
        <Fragment>
            { props.anecdotes.map( anecdote =>
                <div key={ anecdote.id }>
                    <div>
                        { anecdote.content }
                    </div>
                    <div>
                        has { anecdote.votes }
                        <button onClick={ () => {
                            vote( anecdote )
                            props.notificationAction( anecdote.content,5 )
                        } }>vote</button>
                    </div>
                </div>
            ) }
        </Fragment>
    )
}

const mapStateToProps = ( state ) => {
    if ( state.filter === "ALL" )
        return { anecdotes: state.anecdotes }
    return ( { anecdotes: state.anecdotes.filter( anecdote => anecdote.content.includes( state.filter ) ) } )
}

const mapDispatchToProps = {
    notificationAction,
    voteAction
}

const ConnectedAnecdotes = connect( mapStateToProps,mapDispatchToProps )( AnecdoteList )
export default ConnectedAnecdotes