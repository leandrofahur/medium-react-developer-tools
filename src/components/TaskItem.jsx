import propTypes from "prop-types";

function TaskItem({ index, task, deleteTask }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

TaskItem.propTypes = {
  index: propTypes.number.isRequired,
  task: propTypes.shape({
    text: propTypes.string,
    completed: propTypes.bool,
  }),
  deleteTask: propTypes.func.isRequired,
};

TaskItem.defaultProps = {
  task: {
    text: "",
    completed: false,
  },
};

export default TaskItem;
