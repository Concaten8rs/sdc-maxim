import React from 'react';
import $ from 'jquery'; //replace with native fetch

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: null,
    };
  }

  post() {
    $.ajax({
      url: 'http://127.0.0.1:1128/',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify([{ textContent: 'bad' }]),
      succes: () => console.log('successful post'),
    });
  }

  get() {
    $.get('http://127.0.0.1:1128/')
      .then((data) => {
        this.setState({
          review: data[0].textContent,
        });
      });
  }

  render() {
    return (
      <div>
        <div onClick={() => this.post()}>post</div>
        <div onClick={() => this.get()}>get</div>
        {this.state.review}
      </div>
    );
  }
}

export default App;