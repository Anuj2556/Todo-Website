import { useRef, useState } from "react";
import style from "./AddTodo.module.css";
import { MdOutlineAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // let [todoName, SetTodoName] = useState();
  // let [todoDate, SetTodoDate] = useState();

  let todoNameElement = useRef();
  let todoDateElement = useRef();

  // let noOfUpds = useRef(0);

  // function handleNewTodoName(event) {
  //   SetTodoName(event.target.value);
  //   noOfUpds.current += 1;
  // }
  // function handleNewTodoDate(event) {
  //   SetTodoDate(event.target.value);
  //   console.log(noOfUpds.current);
  // }
  function handleButtonClicked(event) {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    onNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  }
  return (
    <div className={`${style["custom-container"]} container`}>
      <form className="row" onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            // value={todoName}
            placeholder="Enter Todo here"
            // onChange={handleNewTodoName}
            required
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            // value={t odoDate}
            // onChange={handleNewTodoDate}
            required
          />
        </div>

        <div className="col-2">
          <button className="btn btn-success newbtn">
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
