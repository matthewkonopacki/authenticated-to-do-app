import ToDoForm from "@/app/ui/to-do-list/to-do-form";
import ToDoTable from "@/app/ui/to-do-list/to-do-table";
import { fetchToDos } from "@/app/lib/data";
import { useState } from "react";
import { MappedToDos } from "@/app/lib/definitions";

export default async function ToDoView() {
  const todos = await fetchToDos();

  return (
    <>
      <ToDoForm></ToDoForm>
      <ToDoTable currentToDos={todos}></ToDoTable>
    </>
  );
}
