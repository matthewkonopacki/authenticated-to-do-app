import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { ToDoTable } from "@/app/lib/definitions";
export async function fetchToDos() {
  noStore();

  try {
    const todos = await sql<ToDoTable>`
      SELECT
        id,
        description,
        date
      FROM todo
      ORDER BY id ASC
    `;

    return todos.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch todos.");
  }
}
