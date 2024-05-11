"use client";

import { UserGroupIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Account",
    href: "/dashboard/account",
    icon: UserIcon,
  },
];
export default function NavLinks() {
  return (
    <div className="flex flex-col justify-between gap-2.5 mt-3.5 h-full">
      <div className="flex flex-col gap-2.5">
        <div className="h-52 rounded-md bg-background-100"></div>
        {navLinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1.5 h-14 w-full rounded-md bg-background-100 hover:bg-highlight-100 hover:text-text-200 pl-3.5"
            >
              <LinkIcon className="w-6"></LinkIcon>
              <p className="">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <Link
        className="flex justify-center gap-1.5 h-12 w-full rounded-md mb-3.5 content-center hover:bg-highlight-100 bg-background-100"
        href={"/"}
      >
        <p className="items-center m-auto">Sign Out</p>
      </Link>
    </div>
  );
}
