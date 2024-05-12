"use client";

import {
  UserGroupIcon,
  HomeIcon,
  UserIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import NavLink from "@/app/ui/dashboard/nav-link";
import React from "react";
import Logo from "@/app/ui/dashboard/logo";

const navLinks = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "To-do's",
    href: "/dashboard/to-do",
    icon: DocumentCheckIcon,
  },
  {
    name: "Account",
    href: "/dashboard/account",
    icon: UserIcon,
  },
];
export default function NavLinks() {
  return (
    <div className="flex flex-col justify-between gap-2.5 mt-3.5 mb-3.5 h-full">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-center h-52 rounded-md bg-background-100">
          <div className="w-[80%] h-[80%] ">
            <Logo></Logo>
          </div>
        </div>
        {navLinks.map((link) => {
          return (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              icon={link.icon}
            ></NavLink>
          );
        })}
      </div>
      <NavLink name={"Sign Out"} href={"/"}></NavLink>
    </div>
  );
}
