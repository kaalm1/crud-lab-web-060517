import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  onSubmit = (event) =>{
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
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
    // const reviews = this.props.store.getState().reviews.filter((review)=>review.restaurantId === this.props.restaurantId)
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.text} onChange={this.onChange} />
        <input type='submit'/>
      </form>
      <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
