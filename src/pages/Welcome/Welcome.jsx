import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'
import CardTodo from '../../components/CardTodo/CardTodo'
import ListTodo from '../../components/ListTodo/ListTodo'

function Welcome() {


  return (
    <div id='welcome_container'>
    <h1>Welcome to My Todos</h1>

    <ListTodo/>

    <Link to='/about'>
    <button>Ir a About</button>
    </Link>
    
    </div>
  )
}

export default Welcome