import React from 'react';
import $ from 'jquery';
import Reviews from './reviews.jsx';
import Filter from './filter.jsx';
import Summary from './summary.jsx';
import styles from '../dist/styles.css';

let sampleReview = {
  product: 'pants',
  title: 'hi',
  name: 'a',
  stars: 4,
  verified: true,
  date: new Date(),
  content: 'i dont like',
  comfort: 1,
  style: 1.2,
  value: 5,
  sizing: 'too small',
  photo: 'false',
};

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      product: '5ebcceac73418e001ccc318c',
    };
  }

  componentDidMount() {
    // this.getReviews();
    this.getAll();
  }

  getAll() {
    fetch('http://127.0.0.1:1128/reviews/all')
      .then((data) => data.json())
      .then((products) => {
        this.setState({
          product: products[0]._id,
          reviews: products[0].reviews,
        });
      });
  }

  getStars() {
    fetch(`http://127.0.0.1:1128/reviews/stars/${this.state.product}`)
      .then((data) => data.json())
      .then((stars) => console.log(stars));
  }

  getReviews() {
    fetch(`http://127.0.0.1:1128/reviews/${this.state.product}`)
      .then((data) => data.json())
      .then((reviews) => {
        console.log('reviews', reviews);
        this.setState({
          reviews,
        });
      });
  }

  render() {
    return (
      <div>
        <Summary reviews={this.state.reviews} />
        <Filter />
        {this.state.reviews && <Reviews reviews={this.state.reviews} />}
      </div>
    );
  }
}

export default ReviewApp;
