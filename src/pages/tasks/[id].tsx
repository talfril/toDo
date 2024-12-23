import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Typography, Button, Card } from "@mui/material";
import Layout from "../../components/layout/layout";

const TaskPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return (
      <Layout>
        <Typography variant='h6'>Задача не найдена</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
        <Typography variant='h1' component="h2" color='primary'>
          Задача №{task.id}
        </Typography>
        <Card>
          <Typography variant='h6'>{task.title}</Typography>
        </Card>
          <Typography variant='body1' color="secondary">
            Статус: {task.completed ? "выполнена" : "не выполнена"}
          </Typography>
        <Button variant='contained' onClick={() => router.push("/")}>
          Вернуться к списку задач
        </Button>
    </Layout>
  );
};

export default TaskPage;
