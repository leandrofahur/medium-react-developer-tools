import propTypes from "prop-types";

import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
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
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
