import ToDoForm from "@/app/ui/to-do-list/to-do-form";
import ToDoTable from "@/app/ui/to-do-list/to-do-table";
import ToDoView from "@/app/ui/to-do-list/to-do-view";

export default function Page() {
  return (
    <main className="flex flex-col h-full w-full">
      <div className="flex flex-col items-center h-full my-3.5 mr-3.5 rounded-md">
        <div className="flex flex-col items-center w-[80%] h-full">
          <ToDoView></ToDoView>
        </div>
      </div>
    </main>
  );
}
