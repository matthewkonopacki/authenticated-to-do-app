"use client";
import { useFormState } from "react-dom";
import { createToDo } from "@/app/lib/actions";
import { PlusIcon } from "@heroicons/react/24/outline";
export default function ToDoForm() {
  const initialState = { message: "", errors: {}, resetKey: "" };
  const [state, dispatch] = useFormState(createToDo, initialState);

  return (
    <div className="w-full mt-10">
      <form action={dispatch} className="flex flex-col" key={state?.resetKey}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            id="description"
            name="description"
            className="grow"
            placeholder="Add To-Do"
          />
          <PlusIcon className="w-6"></PlusIcon>
        </label>
      </form>
    </div>
  );
}
