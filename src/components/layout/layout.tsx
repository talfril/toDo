import React from "react";
import styles from "./layout.module.scss";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Box className={styles.pageStyle}>{children}</Box>;
};

export default Layout;
