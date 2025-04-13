import React from "react";
import { Metadata } from "next";
import style from "../../styles/home.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HOME",
};

async function getLists() {
  const response = await fetch(
    "https://books-api.nomadcoders.workers.dev/lists"
  );
  const json = await response.json();
  return json.results;
}
export default async function HomePage() {
  let lists;
  lists = await getLists();

  return (
    <div className={style.home}>
      <h2>The New York Times Best Seller Explorer</h2>
      <ul>
        {lists.map((list) => (
          <li key={list.list_name_encoded}>
            <Link href={`/list/${list.list_name_encoded}`}>
              {list.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
