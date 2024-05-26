import ToDoTable from "@/app/ui/to-do-list/to-do-table";

export interface ToDoTable {
  description: string;
  date: Date;
  id: number;
}

export interface MappedToDos extends ToDoTable {
  showInput: boolean;
}
