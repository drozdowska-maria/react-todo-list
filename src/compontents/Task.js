import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./styles/Tasks.module.css";

const TASK_LIST = ["read", "sleep", "eat", "drink alcohol", "dont take drugs"];

export const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.name);

  const editInputRef = useRef();

  useEffect(() => {
    if (isEditing) {
      editInputRef.current.focus();
    }
  }, [isEditing]);


  return (
    <li className={styles.li}>
      {!isEditing && (
        <div className={styles.container}>
          <input
            type="checkbox"
            defaultChecked={props.taskIsDone}
            id={props.id}
            onChange={() => props.handleChange(props.id)}
          ></input>
          <label
            className={props.taskIsDone ? styles.labelOn : styles.labelOff}
            htmlFor={props.id}
          ></label>
        </div>
      )}

      {!isEditing ? (
        <span
          onDoubleClick={() => setIsEditing((was) => !was)}
          className={props.taskIsDone ? styles.contentOff : styles.contentOn}
        >
          {inputValue}
        </span>
      ) : (
        <input
          className={styles.contentOn}
          style={{
            height: 60,
            marginLeft: 40,
            paddingLeft: 20,
            border: "2px solid gray",
            boxShadow: "inset 2px 2px 5px 2px #33333320",
          }}
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
          ref={editInputRef}
        ></input>
      )}
      {!isEditing && (
        <button
          onClick={() => props.onHandleDelete(props.id)}
          className={styles.button}
        >
          +
        </button>
      )}
    </li>
  );
};
