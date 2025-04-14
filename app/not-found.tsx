import { Metadata } from "next";
import React from "react";
import style from "../styles/not-found.module.css";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className={style.notFound}>
      <h2>404 error</h2>
      <p>Sorry, we can't find that page. It might have been moved.</p>
    </div>
  );
}
