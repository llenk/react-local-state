import React, { Component } from 'react';

const emptyUser = {
  name: '',
  city: '',
  zip: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: emptyUser,
      users: [],
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChangeFor = propertyName => event => {
    // this.state.user[propertyName] = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value,
      }
    });
  } // this is a weird ES6 thing so the first function automatically returns 
  // the second function, which is a confusing but concise way to write currying
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      users: [...this.state.users, this.state.user],
    });
    this.setState({
      user: emptyUser,
    });
  }

  render() {
    // const userList = this.state.users.map(user=><li key={user.name}>{this.state.user.name} lives in {this.state.user.city}, {this.state.user.zip}</li>);
    return (
      <div>
        <p>The current user is {this.state.user.name} who lives in {this.state.user.city}, {this.state.user.zip}</p>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} type="text" placeholder="name" />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} type="text" placeholder="city" />
          <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} type="text" placeholder="zip code" />
          <p><input type="submit" /></p>
          <ul>
            {this.state.users.map(user=><li key={user.name}>{user.name} lives in {user.city}, {user.zip}</li>)}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
