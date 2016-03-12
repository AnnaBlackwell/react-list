import React from 'react'
import RemoveItem from './remove-item'
import { Link } from 'react-router'

export default React.createClass({

  getInitialState() {
    return {
      items: [
        { name: 'blanket forts' },
        { name: 'kittens' },
        { name: 'shrimp tacos' }
      ]
    }
  },

  addItem() {
    let name = prompt('Add a new item:')
    this.setState({
      items: this.state.items.concat({ name })
    })
  },

  handleRemoveItem(removedItem) {
      this.setState({
        items: this.state.items.filter(function (item) {
          return item.name != removedItem
        })
      })

      this.context.router.push('/')
    },

  render() {
    let links = this.state.items.map(function (item, i) {
      return (
        <li key={i}>
          <Link to={`/item/${item.name}`}>{item.name}</Link>
        </li>
      )
    })

    return (
      <div>
        <button onClick={this.addItem}>Add Item</button>
        <ul className="Master">
          {links}
        </ul>
        <div className="Detail">
          {this.props.children && React.cloneElement(this.props.children, {
            onRemoveItem: this.handleRemoveItem
          })}
        </div>
      </div>
    )
  }
})
