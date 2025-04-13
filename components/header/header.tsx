"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../../styles/header.module.css";
import ThemeBtn from "./theme-btn";

export default function Header() {
  const path = usePathname();
  console.log(path);
  return (
    <header className={style.header}>
      <nav className={style.headerNav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
            {(path === "/" || path.startsWith("/list")) && <i></i>}
          </li>
          <li>
            <Link href="/about">About</Link>
            {path === "/about" && <i></i>}
          </li>
        </ul>
      </nav>
      {/* <ThemeBtn /> */}
    </header>
  );
}
