import { clsx } from "clsx";
import { useFormState } from "react-dom";
import { editToDo } from "@/app/lib/actions";
import { Dispatch, SetStateAction } from "react";

export default function EditToDoForm({
  description,
  id,
  updateCallback,
  todoClickState,
}: {
  description: string;
  id: number;
  updateCallback: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
  todoClickState: { [key: string]: boolean };
}) {
  const initialState = { message: "", errors: {} };

  const editToDoWithId = editToDo.bind(null, id);
  const [state, dispatch] = useFormState(editToDoWithId, initialState);

  return (
    <form
      action={dispatch}
      onSubmit={() => {
        const formOpenState = { ...todoClickState };

        formOpenState[id] = false;

        updateCallback(formOpenState);
      }}
    >
      <label className="input input-bordered input-sm flex items-center gap-2">
        <input
          type="text"
          id="description-edit"
          name="description"
          className="grow"
          defaultValue={description}
        ></input>
      </label>
    </form>
  );
}
