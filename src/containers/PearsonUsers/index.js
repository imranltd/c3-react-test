import React, { Component } from "react";

import Heading from '../../components/Heading'
import User from '../../components/User'

import { deleteUser, appendData, removeDuplicates } from '../../scripts'
import { initialData } from '../../scripts/data'

import './styles.css';

export default class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = initialData

    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
        fetch('https://reqres.in/api/users?page=1&per_page=10',
      { 
        headers: { 
          'Accept': 'application/json', 
        }, 
      }
    )
    .then(response => response.json()).catch(err => { console.log(`${err} happened!`); return {}; })
    .then(json => { 
      const users = removeDuplicates(appendData(this.state.users, json.data.map( d => d)))
      this.setState({users})
    }).catch((err) => {console.log('fetch request failed: ', err)} )
  }

  handleClick = id => {
    this.setState(deleteUser(this.state.users, id))
  }

  render() {
    return (
      <div className="app-container">
        <Heading>Pearson User Management</Heading>
        {
          this.state.users.map((user, index) => {
            return(<User key={`key-${user.id}`} data={user} onClick={() => this.handleClick(index)}/>)
          })
        }
      </div>
    );
  }
}

