import { Metadata } from "next";
import React from "react";
import style from "../../styles/about.module.css";

export const metadata: Metadata = {
  title: "ABOUT",
};

export default function About() {
  return (
    <div className={style.about}>
      <h2>About us</h2>
      <p>Welcome to the official for The New York Times Best Seller Explorer</p>
      <p>We hope you enjoy your stay!</p>
    </div>
  );
}
