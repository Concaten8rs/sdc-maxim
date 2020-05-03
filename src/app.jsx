import React from 'react';
import $ from 'jquery'; //replace with native fetch
import Review from './review.jsx';

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
      review: {
        title: 'hi',
        name: 'a',
      },
      product: '5eab4056f17bded9994b287b',
    };
  }

  componentDidMount() {
    console.log('mounted app');
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
      .then((reviews) => console.log(reviews));
  }

  render() {
    return (
      <div>
        <div onClick={() => this.get()}>products</div>
        <div onClick={() => this.getStars()}>stars</div>
        <div onClick={() => this.getReviews()}>reviews</div>
        <Review title={this.state.review.title} />
      </div>
    );
  }
}

export default App;