import React from "react";
import styles from "./layout.module.scss";
import { Typography, Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode; 
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={styles.pageStyle}>
      <Box>
        <Typography component="h1" variant="h1" color="primary" className={styles.title}>
          ToDo list
        </Typography>
        {children} 
      </Box>
    </main>
  );
};

export default Layout;
