import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  onSubmit = (event) =>{
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: ''
    })
  }

  onChange = (event) =>{
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.text} onChange={this.onChange} />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
