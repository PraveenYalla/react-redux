import React, { Component } from 'react';



class Lists extends Component {

   
   
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Tasks
                            </th>
                            <th colSpan="2">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {
                        (this.props.todolists.length > 0) ?
                        this.props.todolists.map(todo => (  
                            (!todo.edit) ? 
                            <tr key={todo.id}>
                                <td width="80%">
                                    {todo.todoitem}
                                </td>
                                <td>
                                    <button onClick={()=>{this.props.editTodo(todo.id)}} className="btn blue">edit</button>
                                </td>
                                <td>
                                    <button onClick={()=>{this.props.deleteTodo(todo.id)}} className="btn red">delete</button>
                                </td>
                            </tr>
                            : 
                            <tr key={todo.id}>
                                 <td width="80%" colSpan="2">
                                    <input type="text" defaultValue={todo.todoitem}></input>
                                </td>
                                <td >
                                    <button  className="btn red">cancel</button>
                                </td>
                            </tr>
                        
                        )) : 
                        <tr>
                            <td colSpan="2">No items found</td>
                        </tr>
                    }
                   
                   </tbody>
                </table>
            </div>
        );
    }
}

export default Lists;