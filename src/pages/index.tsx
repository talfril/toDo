import React, { useEffect, useState } from "react";
import styles from "./mainPage.module.scss";
import useDevice from "../utils/useDevice";
import clsx from "clsx";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Task from "../components/task/task";
import Loading from "../components/loading/loading";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";

export const MainPage = () => {
  const device = useDevice();
  const [tasks, setTasks] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        const filteredTasks = data.filter(
          (task: { userId: number }) => task.userId === 2
        );
        setTasks(filteredTasks);
      } catch (error) {
        console.error("Ошибка загрузки задач:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTaskClick = () => {
    router.push("/addTaskPage");
  };

  return (
    <>
      <Button
        aria-label='Добавить новую задачу'
        className={styles.addTaskButton}
        variant='contained'
        onClick={handleAddTaskClick}
      >
        <AddIcon />
      </Button>
      <Layout>
        <Box className={clsx(styles.taskList, `taskList__${device}`)}>
          {loading ? (
            <Loading />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
              />
            ))
          )}
        </Box>
      </Layout>
    </>
  );
};

export default MainPage;
