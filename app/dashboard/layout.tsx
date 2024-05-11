import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-none h-screen">
      <div className="w-56  bg-black">
        <SideNav />
      </div>
      <div className="flex-grow bg-base-100">{children}</div>
    </div>
  );
}
