import React from "react";
import styles from "./styles/Form.module.css";
import { useState, useRef } from "react";

export const Header = ({ onSubmit, task, onTaskChange, taskRef,  }) => {

  
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="add-task">
          <h1 className={styles.header}>todos</h1>
          <input
            value={task}
            onChange={(e) => onTaskChange(e.target.value)}
            className={styles.addTask}
            type="text"
            name="add-task"
            placeholder="What needs to be done?"
            ref={taskRef}
          />
        </label>
      </form>
    </>
  );
};
