import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import styles from "./addTaskPage.module.scss";

const AddTaskPage: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    dispatch(addTask(newTask));

    setTaskTitle("");
    router.push("/");
  };

  const handleReturn = () => {
    router.push("/");
  };

  return (
    <Layout>
      <Button
        aria-label='Добавить новую задачу'
        className={styles.returnButton}
        variant='contained'
        onClick={handleReturn}
      >
        Вернуться к списку задач{" "}
      </Button>
      <Typography variant='h1' component='h2' color='primary'>
        Новая задача
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          label='Новая задача'
          variant='outlined'
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          multiline
          rows={2}
          fullWidth
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={styles.formButton}
        >
          Добавить задачу
        </Button>
      </form>
    </Layout>
  );
};

export default AddTaskPage;
