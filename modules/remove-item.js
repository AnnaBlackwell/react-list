import React from 'react'

export default React.createClass({
    remove() {
      this.props.onRemoveItem(this.props.params.name)
    },

    render() {
      return (
        <div className="Item">
          <h1>{this.props.params.name}</h1>
          <button onClick={this.remove}>Remove</button>
        </div>
      )
    }
  })
