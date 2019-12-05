import React, { Component } from 'react';
import Lists from './lists/lists';
import Create from './create/create'
class todoApp extends Component {

    constructor(){
        super();
        this.state = {
            todolists:[{
                id:1,
                todoitem:"task1",
                edit:false
            },{
                id:2,
                todoitem:"task2",
                edit:false
            }]
        }
        
    }   

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todolists,todo];
        this.setState({
            todolists:todos
        })
    }


    deleteTodo = (id) => {
        let todos = this.state.todolists.filter((res) => {
            return res.id !== id;
        });

        this.setState({
            todolists:todos
        })
    }

    editTodo = (id) => {

        let finditem = this.state.todolists.find((res) => {
            return res.id === id;
        });

        finditem.edit = true;

        let items = [...this.state.todolists];
        items[this.state.todolists.indexOf(finditem)] = finditem;

        this.setState({
            todolists:items
        })
        
    }



    render() {
        return (
            <div className="container">
                <h2>Lists</h2>
                <Create addTodo={this.addTodo} />
                <Lists todolists={this.state.todolists} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
            </div>
        );
    }
}

export default todoApp;