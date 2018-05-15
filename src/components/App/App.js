import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {user: {name: 'Ellen', city: 'Sun Prairie'}};
    // this.handleChange = this.handleChange.bind(this);
  }

  handleNameChange = (event) => {
    // this.state.user = event.target.value; // event is a javascript thing, not a React thing
    this.setState({user: {name: event.target.value, city: this.state.user.city}});
  }
  handleCityChange = (event) => {
    this.setState({user: {city: event.target.value, name: this.state.user.name}});
  }
  logValues = () => {
    console.log(this.state.user);
  }

  render() {
    return (
      <div>
        <p>The current user is {this.state.user.name} who lives in {this.state.user.city}</p>
        <input onChange={this.handleNameChange} type="text" placeholder="name"/>
        <input onChange={this.handleCityChange} type="text" placeholder="city"/>
        <p><input onClick={this.logValues} type="submit"/></p>
      </div>
    );
  }
}

export default App;
