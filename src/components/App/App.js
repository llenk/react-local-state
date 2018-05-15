import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {user: 'Ellen', city: 'Sun Prairie'};
    // this.handleChange = this.handleChange.bind(this);
  }

  handleNameChange = (event) => {
    // this.state.user = event.target.value; // event is a javascript thing, not a React thing
    this.setState({user: event.target.value});
  }
  handleCityChange = (event) => {
    this.setState({city: event.target.value});
  }
  logValues = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>The current user is {this.state.user} who lives in {this.state.city}</p>
        <input onChange={this.handleNameChange} type="text" placeholder="name"/>
        <input onChange={this.handleCityChange} type="text" placeholder="city"/>
        <p><input onClick={this.logValues} type="submit"/></p>
      </div>
    );
  }
}

export default App;
