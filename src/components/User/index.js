import React from "react";

import Button from '../Button'
import './styles.css';

const Avatar = props => {
	return <img 
    className='avatar'
    src={props.url} 
    alt={`${props.fname} 
    ${props.lname}`} />
}


const Fullname = props => {
  return <div className='fullname'>{props.fname} {props.lname}</div>
}

const User = props => {
  const {avatar, first_name, id, last_name} = props.data
  return(<div className='user-container pearson-user' id={`user${id}`}>
    <Avatar url={avatar} fname={first_name} lname={last_name} />
    <Fullname fname={first_name} lname={last_name} />
    <Button onClick={props.onClick} label='Delete' />
  </div>)
}

export default User

// add default values