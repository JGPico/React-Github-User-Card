import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard";
import SearchForm from "./components/SearchForm";
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

  filterSearch = queryBit => {
    
    this.state.followers.map(element => {
      if (element.login.toLowerCase().includes(queryBit.toLowerCase())) {

        this.setState({
          followers: element
        })

      }
      //  else {
      //   this.setState({
      //     followers: element
      //   })
      // }
    })
    
  }

  render() {
    return (
      <div>
        <h1 className='intro-h1'>A list of GitHub users</h1>
        <SearchForm filterSearch={this.filterSearch}/>
        <UserCard 
        user={this.state.user}
        followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
