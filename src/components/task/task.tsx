import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";


import styles from "./task.module.scss";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
}

export const Task: React.FC<TaskProps> = ({ id, title, completed }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.icon}>
        {completed ? (
          <CheckCircleIcon className={styles.completedIcon} />
        ) : (
          <RadioButtonUncheckedIcon/>

        )}</div>
      <CardContent className={styles.content}>
        <Typography className={styles.id} variant='body2'>
          #{id}
        </Typography>
        <Typography variant='body1'>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
