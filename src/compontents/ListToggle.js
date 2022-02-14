import styles from "./styles/ListToggle.module.css";

export const ListToggle = ({
  taskList,
  setTaskList,
}) => {
  const handleToggleAll = () => {
    const allTasksDone = taskList.every((task) => task.isDone === true);
    const newTaskList = taskList.map((task) => ({...task, isDone: !allTasksDone})) 
    setTaskList(newTaskList);
  };            

  return (
    <div className={styles.container} style={{ zIndex: 1 }}>
      <input
        type="checkbox"
        id="all-checked"
        onChange={handleToggleAll}
      ></input>
      <label htmlFor="all-checked"></label>
    </div>
  );
};
