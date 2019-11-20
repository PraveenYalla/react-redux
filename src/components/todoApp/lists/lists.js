import React, { Component } from 'react';

class Lists extends Component {

    constructor(){
        super();
        this.state = {
            todolists:[{
                id:1,
                name:"task1"
            },{
                id:2,
                name:"task2"
            }]
        }
        
    }

   
    render() {
        return (
            <div>
                <h2>Lists</h2>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        
                    {
                        this.state.todolists.map(todo => (  
                        <tr key={todo.id}>
                        <td>
                            {todo.name}
                        </td>
                        </tr>
                        ))
                    }
                   
                   </tbody>
                </table>
            </div>
        );
    }
}

export default Lists;