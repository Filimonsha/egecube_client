import ElementContainer from "@/components/sidebar/ElementContainer";
import Item from "@/components/sidebar/menu/Item";
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
        <ElementContainer key={index}>
          <Item currentPath={currentPath} targetPath={path}>
            {menuElements[index]}
          </Item>
        </ElementContainer>
      ))}
    </>
  );
};

export default Menu;
