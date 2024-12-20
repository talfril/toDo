import React from "react";
import styles from "./layout.module.scss";
import { Typography, Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode; 
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <Box className={styles.pageStyle}>
        <Typography component="h1" variant="h1" color="primary" className={styles.title}>
          ToDo list
        </Typography> 
        {children} 
      </Box>
    
  );
};

export default Layout;
