import React from "react";

export default function Books({ params: { id } }: { params: { id: number } }) {
  return <h1>책이다{id}</h1>;
}
