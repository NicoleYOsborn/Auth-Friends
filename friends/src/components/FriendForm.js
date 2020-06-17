import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

class FriendForm extends React.Component {
  state ={
    id: Date.now(),
    name: '',
    age: '',
    email: '' 
  };

  handleChange = e => {
    console.log("handler",e.target.name)
    this.setState(
        {...this.state,
            [e.target.name]: e.target.value}
        
        );
        console.log('this is the state', this.state)
  };

  submit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/friends', this.state)
    .then(res => {
      console.log(res)
    })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
           <label>Friend's name</label> 
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>age</label>
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <label>email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;