import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router"; 

const AddTaskPage = () => {
  const router = useRouter();

  const handleAddTaskClick = () => {
    router.push("/"); 
  };

  return (
    <>
      <div>Страница добавления новой задачи, тут будет форма</div>
      <Button
        aria-label="Вернуться на главную страницу"
        variant="contained"
        onClick={handleAddTaskClick}  
      >
        Вернуться на главную
      </Button>
    </>
  );
};

export default AddTaskPage;
