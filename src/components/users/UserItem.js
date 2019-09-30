import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    // this.props.user being passed from Users.js
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='avatar'
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
