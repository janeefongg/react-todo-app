import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="new">Create New Task</Link></li>
    </ul>
  </div>
)

export default Nav;