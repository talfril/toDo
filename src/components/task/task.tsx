import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./task.module.scss";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  onToggleCompleted: () => void;
  onDelete: () => void;
  onClick: () => void;
}

export const Task: React.FC<TaskProps> = ({ id, title, completed, onToggleCompleted, onDelete, onClick }) => {

  const handleStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Card className={styles.card} onClick={onClick}>
      <div className={styles.icon}>
        <IconButton onClick={(event) => { onToggleCompleted(); handleStopPropagation(event); }}>
          {completed ? (
            <CheckCircleIcon className={styles.completedIcon} />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>

        <IconButton onClick={(event) => { onDelete(); handleStopPropagation(event); }}>
          <DeleteIcon />
        </IconButton>
      </div>
      <CardContent className={styles.content}>
        <Typography className={styles.id} variant="body2">
          #{id}
        </Typography>
        <Typography variant="body1">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
