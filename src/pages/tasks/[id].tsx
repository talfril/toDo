import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Typography, Button, Card, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/layout/layout";
import { updateTask, removeTask } from "../../store/tasksSlice"; 
const TaskPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return (
      <Layout>
        <Typography variant='h1' component="h2" color="primary">Страница не найдена</Typography>
        <Button variant='contained' onClick={() => router.push("/")}>
          Вернуться к списку задач
        </Button>
      </Layout>
    );
  }

  const toggleTaskStatus = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const deleteTask = () => {
    dispatch(removeTask(task.id));
    router.push("/"); 
  };

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

      <div>
        <IconButton onClick={toggleTaskStatus}>
          {task.completed ? (
            <CheckCircleIcon color="primary" />
          ) : (
            <RadioButtonUncheckedIcon color="primary" />
          )}
        </IconButton>

        <IconButton onClick={deleteTask}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </div>

      <Button variant='contained' onClick={() => router.push("/")}>
        Вернуться к списку задач
      </Button>
    </Layout>
  );
};

export default TaskPage;
