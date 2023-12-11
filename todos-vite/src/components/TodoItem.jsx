/* eslint-disable react/prop-types */
function Todo({ item, dispatch }) {
    return (
      <li style={{ listStyle: "none" }}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => dispatch({ type: 'COMPLETE_TOGGLE', payload: item.id})}
        />
        {item.text}
        <button onClick={() => dispatch({ type: 'DELETE_TODO', payload : item.id})}>x</button>
      </li>
    );
  }
  
  export default Todo;