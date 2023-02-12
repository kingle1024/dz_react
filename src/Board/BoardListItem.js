import React from 'react';
import { Link, NavLink, Routes } from 'react-router-dom';

const BoardListItem = ({todo}) => {
    const {id, title} = todo;
    console.log("todoListItem");
    console.log(todo);
    return (
        <div>                    
        
            <NavLink
                to={`/board/view/${id}`}
            >
                {title}        
            </NavLink>
            
                     
        </div>
    );
};

export default BoardListItem;