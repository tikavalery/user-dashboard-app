import React from 'react';
import User from './User'
import { USER_PER_PAGE } from '../utils/constants';

const users = ({ users, page, isSearching  }) => {


  const startIndex = (page - 1) * USER_PER_PAGE;
  console.log(startIndex)
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
  return isSearching
    ? users.map((user) => <User user={user} key={user.login.uuid} />)
    : selectedUsers.map((user) => <User user={user} key={user.login.uuid} />);
};

export default users;
