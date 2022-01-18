import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map(user => {
            return <li key={user.username}>Username: {user.username}, Hometown: {user.hometown}</li>
          })}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.userCount} Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  debugger;
  return { users: state.users, userCount: state.users.length }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
