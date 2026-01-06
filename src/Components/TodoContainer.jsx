import TodoItem from "./TodoItem";

function TodoContainer({ todoItems, onDeleteClick }) {
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.tdate}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </>
  );
}

export default TodoContainer;
