import * as React from 'react';
import { connect } from 'react-redux';
import { increase, decrease, addNumber } from '../redux/actions';
class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            num: ""
        }
    }

    numChange = (e) => {
        this.setState({
            num: e.target.value
        })
    }

    numSubmit = (e) => {
        e.preventDefault();
        this.props.submitNumber(this.state.num);
        this.setState({
            num: ""
        })
    }

    render() {
        return (
            <div>
                <h2>Numbers</h2>
                <div className="row">
                    <div className="col s5 ">
                        <button className=" btn btn-primary " onClick={this.props.increaseNumber}>Increase</button>
                    </div>
                    <div className="col s2">
                        <form action="" onSubmit={this.numSubmit}>
                            <input type="text" value={this.state.num} onChange={this.numChange} />
                        </form>
                    </div>
                    <div className="col s5">
                        <button className="btn btn-primary" onClick={this.props.decreaseNumber}>Decrease</button>
                    </div>
                    <div className="col s12 ">
                        <h2>{this.props.number}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        increaseNumber: () => {
            dispatch(increase());
        },
        decreaseNumber: () => {
            dispatch(decrease());
        },
        submitNumber: (num) => {
            dispatch(addNumber(num))
        }
    })
}

const mapStateToProps = (state) => {
    return ({
        number: state.NumberReducer.number
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing);