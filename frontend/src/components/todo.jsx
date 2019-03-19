import React from 'react'

import PageHeader from '../template/page-header'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default props => (
  <div>
    <PageHeader name='Tarefas' small='Cadatro'></PageHeader>
    <TodoForm />
    <TodoList />
  </div>
)