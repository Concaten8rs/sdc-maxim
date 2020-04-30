import React from 'react';
import $ from 'jquery'; //replace with native fetch

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

  post() {
    $.ajax({
      url: 'http://127.0.0.1:1128/',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify([sampleReview]),
      succes: () => console.log('successful post'),
    });
  }

  get() {
    $.get('http://127.0.0.1:1128/')
      .then((data) => {
        console.log(data);
        this.setState({
          review: data[0],
        });
      });
  }

  getStars() {
    console.log('getting in app');
    $.get(`http://127.0.0.1:1128/reviews/stars/${this.state.product}`)
      .then((stars) => {
        console.log(stars);
      });
  }

  render() {
    return (
      <div>
        <div onClick={() => this.post()}>post</div>
        <div onClick={() => this.get()}>get</div>
        <div onClick={() => this.getStars()}>stars</div>
      </div>
    );
  }
}

export default App;