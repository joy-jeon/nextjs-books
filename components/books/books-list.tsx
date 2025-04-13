// import potato from "../styles/movie-info.module.css";
import { API_URL } from "../../app/constants";

export async function getBook(listName: string) {
  const response = await fetch(`${API_URL}/list?name=${listName}`);

  if (!response.ok) {
    const message = await response.text();
    console.error("API 응답 에러:", response.status, message);
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  return response.json();
}

export default async function BookList({ listName }: { listName: string }) {
  const book = await getBook(listName);
  return (
    <main>
      <span>{book.list_name}</span>
    </main>
  );
}
