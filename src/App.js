import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { voteAction } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'


const App = () => {
  const dispatch = useDispatch()

  const vote = ( id ) => {
    console.log( 'vote',id )
    dispatch( voteAction( id ) )
  }
  const anecdotes = useSelector( state => state )


  return (
    <div>
      <h2>Anecdotes</h2>
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
      <AnecdoteForm />
    </div>
  )
}

export default App