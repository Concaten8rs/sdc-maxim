import React from 'react';
import $ from 'jquery'; //replace with native fetch
import Reviews from './reviews.jsx';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      product: '5eab4056f17bded9994b287b',
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  get() {
    fetch('http://127.0.0.1:1128/')
      .then((data) => data.json())
      .then((products) => console.log(products));
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
        this.setState({
          reviews,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.reviews && <Reviews reviews={this.state.reviews} />}
      </div>
    );
  }
}

export default App;