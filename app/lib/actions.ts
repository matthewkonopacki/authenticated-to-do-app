"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const ToDoFormSchema = z.object({
  id: z.number(),
  description: z
    .string({
      invalid_type_error: "Please enter a to-do description.",
    })
    .min(1),
  date: z.string(),
});

const CreateToDo = ToDoFormSchema.omit({ id: true, date: true });
const EditToDo = ToDoFormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    description?: string[];
  };
  message?: string | null;
};

export async function createToDo(prevState: State, formData: FormData) {
  const validatedFields = CreateToDo.safeParse({
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing description. Failed to Create To-Do",
      resetKey: Date.now().toString(),
    };
  }

  const { description } = validatedFields.data;
  const date = new Date().toISOString();

  try {
    const response = await sql`
      INSERT INTO todo (description, date, fk_user__id)
      VALUES (${description}, ${date}, 1)
    `;
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to Create To-Do.",
    };
  }

  revalidatePath("/to-do-list");
  return {
    resetKey: new Date().toISOString(),
  };
}

export async function deleteToDo(id: number) {
  try {
    await sql`DELETE FROM todo WHERE id = ${id}`;
    revalidatePath("/to-do-list");

    return { message: "Deleted Todo." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Todo.",
    };
  }
}

export async function editToDo(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = EditToDo.safeParse({
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing description. Failed to Create To-Do",
    };
  }

  const { description } = validatedFields.data;

  try {
    const response =
      await sql`UPDATE todo SET description = ${description} WHERE id = ${id}`;

    console.log(response);
  } catch (err) {
    console.log(err);
    return {
      message: "Database Error: Failed to Create To-Do.",
    };
  }

  revalidatePath("/to-do-list");
  return {};
}
