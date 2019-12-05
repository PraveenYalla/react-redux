import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createTodo } from '../../../redux/actions'
import {bindActionCreators} from 'redux'

class Create extends Component {

    state = {
        todoitem:""
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if(this.state.todoitem !== ""){
            this.props.createTodoClick(this.state.todoitem) 
        }
        this.setState({
            todoitem:""
        })
        console.log(this.props);
    }

    onInputChange = (e) => {
        this.setState({
            todoitem:e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input placeholder="What needs to be done?" type="text" onChange={this.onInputChange} value={this.state.todoitem}></input>
                </form>
            </div>  
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return ({
        createTodoClick: (data) => {
            dispatch(createTodo(data));
        }
    })
}

const mapStateToProps = (state) => {
    return ({
        todoList:state
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Create);