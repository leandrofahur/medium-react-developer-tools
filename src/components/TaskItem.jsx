import propTypes from "prop-types";

function TaskItem({ task }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
    </li>
  );
}

TaskItem.propTypes = {
  task: propTypes.shape({
    text: propTypes.string,
    completed: propTypes.bool,
  }),
};

TaskItem.defaultProps = {
  task: {
    text: "",
    completed: false,
  },
};

export default TaskItem;
