import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
      axios.get('https://api.github.com/users/JGPico')
      .then(response => {
        console.log("User response = ", response);
        this.setState({
          user: response.data
        });
      }).catch(error => {
        console.log("Error Message", error)
      });

      axios.get('https://api.github.com/users/JGPico/followers')
      .then(res => {
        console.log("Follower response = ", res)
        this.setState({
          followers: res.data
        })
      }).catch(err => {
        console.log("Followers error", err)
      });
  }

  render() {
    return (
      <div>
        <h1 className='intro-h1'>A list of GitHub users</h1>
        <UserCard 
        user={this.state.user}
        followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
