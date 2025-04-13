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
            {path === "/" ? <i></i> : ""}
          </li>
          <li>
            <Link href="/about">About</Link>
            {path === "/about" ? <i></i> : ""}
          </li>
        </ul>
      </nav>
      {/* <ThemeBtn /> */}
    </header>
  );
}
