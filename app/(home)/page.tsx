import React from "react";
import Header from "../../components/header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME",
};

export default function Tomato() {
  return (
    <>
      <Header />
      <h1>Page 입니다</h1>
    </>
  );
}
