import React, { PropTypes, Component } from 'react'
import { firebase } from 'react-redux-firebase'

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object,
    id: PropTypes.string
  }
render(){
    const {firebase, todo, id} = this.props
    const toggleDone = () => {
      firebase.set(`/todos/${id}/done`, !todo.done)
    }
    const deleteTodo = (event) => {
       firebase.remove(`/todos/${id}`)
    }
    return (
      <li>
        <input
          className="Todo-Input"
          type="checkbox"
          checked={todo.done}
          onChange={toggleDone}
        />
        {todo.text}
        <button onClick={deleteTodo}>
          Delete
        </button>
      </li>
    )
  }
}
//HOC Adds this.props.firebase
export default firebase()(TodoItem)
