import React from "react";

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
    <main style={{ padding: "2rem" }}>
      <h1>카테고리: {id}</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "1rem",
        }}
      >
        {books.map((book: any) => (
          <li key={book.primary_isbn13}>
            <img src={book.book_image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <a href={book.amazon_product_url} target="_blank">
              사러 고
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
