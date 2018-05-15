import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {user: 'Ellen'};
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    console.log('input was changed');

    console.log(event);

    // this.state.user = event.target.value; // event is a javascript thing, not a React thing
    this.setState({user: event.target.value});
  }

  render() {
    return (
      <div>
        The current user is {this.state.user}
        <input onChange={this.handleChange} type="text"/>
      </div>
    );
  }
}

export default App;
