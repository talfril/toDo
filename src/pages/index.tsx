import React, { useEffect, useState } from "react";
import styles from "./mainPage.module.scss";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Task from "../components/task/task";
import Loading from "../components/loading/loading";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setTasks} from "../store/tasksSlice";
import { RootState } from "../store/store";

export const MainPage = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (tasks.length === 0) {
      const fetchTasks = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          const data = await response.json();
          const filteredTasks = data.filter(
            (task: { userId: number }) => task.userId === 2
          );
          dispatch(setTasks(filteredTasks));
        } catch (error) {
          console.error("Ошибка загрузки задач:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchTasks();
    } else {
      setLoading(false);
    }
  }, [dispatch, tasks]);

  const handleAddTaskClick = () => {
    router.push("/addTaskPage");
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    dispatch(setTasks(updatedTasks));
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    dispatch(setTasks(updatedTasks));
  };

  return (
    <>
      <Button
        aria-label="Добавить новую задачу"
        className={styles.addTaskButton}
        variant="contained"
        onClick={handleAddTaskClick}
      >
        <AddIcon />
      </Button>
      <Layout>
        <Typography component="h1" variant="h1" color="primary" className={styles.title}>
          ToDo list
        </Typography>
        <Box className={styles.taskList}>
          {loading ? (
            <Loading />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                onToggleCompleted={() => toggleTaskCompletion(task.id)} 
                onDelete={() => deleteTask(task.id)} 
                onClick={() => router.push(`/tasks/${task.id}`)}
              />
            ))
          )}
        </Box>
      </Layout>
    </>
  );
};

export default MainPage;
