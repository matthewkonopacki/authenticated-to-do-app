import SideNav from "@/app/ui/to-do-list/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-none h-screen">
      <div className="w-56 ">
        <SideNav />
      </div>
      <div className="flex-grow bg-base-100">{children}</div>
    </div>
  );
}
