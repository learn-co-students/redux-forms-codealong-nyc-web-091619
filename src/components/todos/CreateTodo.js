import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    todo: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatchInput(this.state)
  }

  render() {
    console.log(this.props)
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function dispatchInput(input) {
  return {type: "ADD_TODO", payload: input}
}

export default connect(null, {dispatchInput})(CreateTodo);
