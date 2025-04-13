"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./header.module.css";
import ThemeBtn from "./theme-btn";

export default function Header() {
  const path = usePathname();
  console.log(path);
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            {path === "/" ? "*" : ""}
          </li>
          <li>
            <Link href="/about">About</Link>
            {path === "/about" ? "*" : ""}
          </li>
        </ul>
      </nav>
      {/* <ThemeBtn /> */}
    </header>
  );
}
