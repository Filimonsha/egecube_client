import SidebarElement from "@/components/sidebar/SidebarElement";
import MenuItem from "@/components/sidebar/menu/MenuItem";
import React from "react";
import Error from "next/error";

interface MenuProps {
  currentPath: string;
  paths: Array<string>;
  menuElements: Array<React.ReactNode>;
}

const Menu = ({ currentPath, paths, menuElements }: MenuProps) => {
  if (paths.length !== menuElements.length) return <Error statusCode={500} />;

  return (
    <>
      {paths.map((path, index) => (
        <SidebarElement key={index}>
          <MenuItem currentPath={currentPath} targetPath={path}>
            {menuElements[index]}
          </MenuItem>
        </SidebarElement>
      ))}
      {/*<SidebarElement>*/}
      {/*  <MenuItem currentPath={currentPath} targetPath={""}>*/}
      {/*    <span>Главная</span>*/}
      {/*  </MenuItem>*/}
      {/*</SidebarElement>*/}
      {/*<SidebarElement>*/}
      {/*  <span>Домашние работы</span>*/}
      {/*</SidebarElement>*/}
      {/*<SidebarElement>*/}
      {/*  <span>Расписание</span>*/}
      {/*</SidebarElement>*/}
      {/*<SidebarElement>*/}
      {/*  <span>Учебные материалы</span>*/}
      {/*</SidebarElement>*/}
    </>
  );
};

export default Menu;
