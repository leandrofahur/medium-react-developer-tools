import propTypes from "prop-types";

import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: propTypes.arrayOf(
    propTypes.shape({
      text: propTypes.string,
      completed: propTypes.bool,
    })
  ),
  deleteTask: propTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
