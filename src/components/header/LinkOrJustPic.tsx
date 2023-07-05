"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Cube from "@/components/funnyJokes/Cube";

const LinkOrJustPic = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" ? (
        <Link href={"/"}>
          <Cube />
        </Link>
      ) : (
        <Cube />
      )}
    </>
  );
};

export default LinkOrJustPic;
