import React, { Component } from 'react';
import Lists from './lists/lists';
import Create from './create/create'
class todoApp extends Component {
    render() {
        return (
            <div>
                <Create />
                <Lists />
            </div>
        );
    }
}

export default todoApp;