import React,  { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  render() {

    return(
      <div>
        <p>{this.props.count}</p>
        <button>Increment</button>
        <button>Decrement</button>
      </div>

    )
  }
}

//mapStateToProps returns just relevant parts of state
//instead of returning whole state
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);