"use client";

import { Button } from "@mui/material";
import styles from "../header.module.css";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  const handler = () => signOut();

  return (
    <div className={styles.headerElement}>
      <Button variant="text" onClick={handler}>
        sign out
      </Button>
    </div>
  );
};

export default SignOutButton;
