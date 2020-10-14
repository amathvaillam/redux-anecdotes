import anecdoteService from '../services/services'

/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const asObject = ( anecdote ) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
const getId = () => ( 100000 * Math.random() ).toFixed( 0 )
const initialState = anecdotesAtStart.map( asObject )

export const createAnecdoteAction = ( content ) => {
  return {
    type: 'NEW ANECDOTE',
    content: asObject( content )
  }
}

*/

export const voteAction = ( anecdote ) => {
  return async dispatch => {
    const response = await anecdoteService.vote( anecdote )
    dispatch( {
      type: 'VOTE',
      data: response
    } )
  }
}

export const initAnecdoteAction = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch( {
      type: 'INIT ANECDOTE',
      data: anecdotes
    } )
  }
}

export const createAnecdoteAction = ( anecdote ) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew( anecdote )
    dispatch( {
      type: 'NEW ANECDOTE',
      data: newAnecdote
    } )
  }
}

const AnecdoteReducer = ( state = [],action ) => {
  console.log( 'state now: ',state )
  console.log( 'action',action )
  switch ( action.type )
  {
    case 'NEW ANECDOTE': {
      return [ ...state,action.data ]
    }
    case 'INIT ANECDOTE': {
      return action.data
    }
    case 'VOTE': {
      const { id,votes } = action.data
      const anecdoteTochange = state.find( n => n.id === id )
      const changedAnecdote = { ...anecdoteTochange,votes }
      return state.map( anecdote => anecdote.id !== id ? anecdote : changedAnecdote )
        .sort( ( a,b ) => -a.votes + b.votes )
    }
    default:
      return state;
  }
}

export default AnecdoteReducer