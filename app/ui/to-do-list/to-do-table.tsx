"use client";
import DeleteTodo from "@/app/ui/to-do-list/delete-todo";
import EditToDo from "@/app/ui/to-do-list/edit-to-do";
import { Dispatch, SetStateAction, useState } from "react";
import { MappedToDos } from "@/app/lib/definitions";
import type { ToDoTable } from "@/app/lib/definitions";
import ToDoDescription from "@/app/ui/to-do-list/to-do-description";

export default function ToDoTable({
  currentToDos,
}: {
  currentToDos: Array<ToDoTable>;
}) {
  const [toDoInputState, updateToDoInputState] = useState<{
    [key: string]: boolean;
  }>({});

  const mappedToDos: Array<MappedToDos> = currentToDos.map((todo) => {
    return {
      ...todo,
      showInput: toDoInputState[todo.id] ?? false,
    };
  });

  return (
    <div className="overflow-x-auto overflow-y-scroll w-full mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {mappedToDos?.map((todo, index) => {
            return (
              <tr key={todo.id}>
                <th>{index + 1}</th>
                <td>
                  <ToDoDescription
                    description={todo.description}
                    id={todo.id}
                    todoClickState={toDoInputState}
                    updateCallback={updateToDoInputState}
                  />
                </td>
                <td>{todo.date.toDateString()}</td>
                <td>
                  <EditToDo
                    updateCallback={updateToDoInputState}
                    currentToDos={toDoInputState}
                    toDoId={todo.id}
                  ></EditToDo>
                </td>
                <td>
                  <DeleteTodo id={todo.id}></DeleteTodo>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
