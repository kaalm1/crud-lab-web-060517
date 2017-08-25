import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  onClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
        id: this.props.restaurant.id,
    })
  }

  render() {
    console.log(this.props)
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.onClick} />
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;
