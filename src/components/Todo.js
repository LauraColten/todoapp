import React, { Component } from 'react'

class Todo extends Component {
  state = {
    count: 0,
    inputText: '',
    todos: []
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleTextChange = (e) => {
    this.setState({ inputText: e.target.value })
  }

  submitTodo = () => {
    const currentTodos = this.state.todos
    currentTodos.push(this.state.inputText)
    console.log(currentTodos)
    this.setState({ todos: currentTodos })
  }

  render() {
    return (
      <div>
        <input type="text"
        placeholder="What needs to be done?"
        onChange={this.handleTextChange}
        value={this.state.inputText}/>
        <button onClick={this.submitTodo}>Add Todo</button>
        {
          this.state.todos.map((todo, index) => {
            return (
              <p key={index}>{todo}</p>
            )
          })
        }
      </div>
    )
  }
}

export default Todo