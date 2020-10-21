import React,{ useEffect } from 'react'
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdotes from './components/AnecdoteList'
import Notification from './components/Notification'
import ConnectedFilter from './components/Filter'
import { initAnecdoteAction } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  useEffect( () => {
    dispatch( initAnecdoteAction() )
  },[ dispatch ] )
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <ConnectedFilter />
      <ConnectedAnecdotes />
      <ConnectedAnecdoteForm />
    </div>
  )
}

export default App