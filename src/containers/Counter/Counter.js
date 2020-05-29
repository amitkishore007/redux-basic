import React, { Component } from 'react'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import CounterInput from '../../components/CounterInput/CounterInput'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput counter={this.props.ctr}/>
                <CounterInput doCount={() => this.props.increment(1) } >InCrement by 1</CounterInput>
                <CounterInput doCount={() => this.props.decrement(3) } >Decrement by 3</CounterInput>
                <CounterInput doCount={() => this.props.increment(4) } >Increment by 4</CounterInput>
                <CounterInput doCount={() => this.props.decrement(8) } >Decrement by 8</CounterInput>

                <hr/>
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>

                <ul>
                    { this.props.rslt.map((result) => {
                        return <li onClick={() => this.props.removeResult(result.id)}>{result.value}</li>
                    }) }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        rslt: state.rslt.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(actions.increment(value)),
        decrement: (value) => dispatch(actions.decrement(value)),
        storeResult: (value) => dispatch(actions.storeResult(value)),
        removeResult: (id) => dispatch(actions.removeResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);