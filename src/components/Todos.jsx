import TodoItem from "./TodoItem";

function Todos({ todos, toggleCompleted }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          completed={todo.completed}
          title={todo.title}
          key={todo.id}
          id={todo.id}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;