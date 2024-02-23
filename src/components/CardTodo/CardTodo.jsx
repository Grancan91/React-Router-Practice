import './CardTodo.css'

import React from 'react'

function CardTodo({todo}) {

  return (
    <div id='cardTodo_container'>
        <h2>{todo.id}</h2>
        <h1>{todo.title}</h1>
        <input type='checkbox' checked={todo.completed}/>
    </div>
  )
}

export default CardTodo