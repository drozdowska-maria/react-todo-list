import { Task } from "./Task";
import { ListToggle } from "./ListToggle";

export const TaskList = ({ taskList, setTaskList, filter }) => {
  const handleDelete = (id) => {
    const remainingTasks = taskList.filter((task) => id !== task.id);

    setTaskList(remainingTasks);
  };

  const handleChange = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  function filterFunction(task) {
    //  filter all
    if (filter === "all") {
      return true;
    }
    //filter completed
    if (filter === "completed") {
      return task.isDone === true;
    }
    //filter active
    if (filter === "active") {
      return task.isDone === false;
    }
  }

  return (
    <div style={{ width: 550 }}>
      <ListToggle setTaskList={setTaskList} taskList={taskList} />
      <ul style={{ paddingInlineStart: 0, marginTop: -20 }}>
        {taskList
          .filter((task) => filterFunction(task, "active"))
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              onHandleDelete={handleDelete}
              taskIsDone={task.isDone}
              handleChange={handleChange}
            />
          ))}
      </ul>
    </div>
  );
};
