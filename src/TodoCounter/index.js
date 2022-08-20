import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoCounter.css';
import MyImage from './imgTodo.png';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <div>
            <center><img src={MyImage} alt="Logo TODO"/></center>
            <h1 className='TodoCounterH1'>Mis Tareas</h1>
            <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>

    );
}

export { TodoCounter };