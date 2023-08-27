"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import LinkToProfile from "@/components/header/links/LinkToProfile";
import SignOutLink from "@/components/header/links/SignOutLink";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { HOMEWORK_ROUTE, MATERIALS_ROUTE } from "@/const/routes";

const menuItems = [
  <LinkToProfile />,
  <Link href={HOMEWORK_ROUTE}>Домашние задания</Link>,
  <Link href={MATERIALS_ROUTE}>Предметы</Link>,
];

const FadeMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { status } = useSession();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {menuItems.map(item => (
          <MenuItem onClick={handleClose}>{item}</MenuItem>
        ))}
        {status === "authenticated" && (
          <MenuItem onClick={handleClose}>
            <SignOutLink />
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default FadeMenu;
