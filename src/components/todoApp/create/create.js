import React, { Component } from 'react';

class Create extends Component {

    state = {
        todoitem:""
    }

    onInputChange = (e) => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={}>
                    <input type="text" onChange={} value={this.state.todoitem}></input>
                </form>
            </div>
        );
    }
}

export default Create;