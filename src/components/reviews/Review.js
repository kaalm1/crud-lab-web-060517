import React, { Component } from 'react';

class Review extends Component {
  onClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      restaurantId: this.props.review.restaurantId,
      id: this.props.review.id
    })
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.onClick} />
      </li>
    );
  }
};

export default Review;
