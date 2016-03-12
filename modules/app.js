import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
    <p><Link to="/list">List</Link></p>
    {this.props.children}
    </div>
  }
})
