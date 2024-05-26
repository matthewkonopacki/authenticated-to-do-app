import { clsx } from "clsx";
import EditToDoForm from "@/app/ui/to-do-list/edit-to-do-form";
import { Dispatch, SetStateAction } from "react";

export default function ToDoDescription({
  description,
  id,
  todoClickState,
  updateCallback,
}: {
  description: string;
  id: number;
  todoClickState: { [key: string]: boolean };
  updateCallback: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
}) {
  return (
    <>
      <span className={clsx({ hidden: todoClickState[id] })}>
        {description}
      </span>
      <div className={clsx({ hidden: !todoClickState[id] })}>
        <EditToDoForm
          description={description}
          updateCallback={updateCallback}
          todoClickState={todoClickState}
          id={id}
        />
      </div>
    </>
  );
}
