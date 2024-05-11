import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
  return (
    <div className="flex flex-col items-center h-full w-full bg-base-100 text-text-100 overflow-scroll">
      <div className="flex flex-col flex-grow w-[90%] space-y-2.5">
        <NavLinks></NavLinks>
      </div>
    </div>
  );
}
