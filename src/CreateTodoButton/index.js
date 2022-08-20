import React from 'react';
import './CreateTodoButton.css';
//import './css/TodoSearch.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
    return (
        <div>            
            <p>
                <button className="CreateTodoButton" onClick={onClickButton}>
                    +
                </button>
            </p>
        </div>
    );
}

export { CreateTodoButton };