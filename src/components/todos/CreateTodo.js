import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  state={
    text: ''
  }

  handleChange = (e)=>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.text}/>
          </p>
          <input type="submit" />
          {this.state.text}
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   };
// };

export default connect()(CreateTodo);
