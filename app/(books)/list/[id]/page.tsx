import { Metadata } from "next";
import React from "react";
import style from "../../../../styles/book.module.css";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: decodeURIComponent(params.id),
  };
}

async function getBooksByListName(id: string) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  const json = await response.json();
  return json.results.books;
}

export default async function Books({
  params: { id },
}: {
  params: { id: string };
}) {
  const books = await getBooksByListName(id);

  return (
    <div className={style.bookCategory}>
      <h2>{id}</h2>
      <ul className={style.bookCategoryUl}>
        {books.map((book: any) => (
          <li key={book.primary_isbn13}>
            <img
              src={book.book_image || "https://picsum.photos/300/500"}
              alt={book.title}
            />
            <div className={style.bookCategoryText}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <a href={book.amazon_product_url} target="_blank">
              buy now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
