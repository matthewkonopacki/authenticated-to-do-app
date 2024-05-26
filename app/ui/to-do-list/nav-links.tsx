"use client";

import {
  UserGroupIcon,
  HomeIcon,
  UserIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import NavLink from "@/app/ui/to-do-list/nav-link";
import React from "react";
import Logo from "@/app/ui/to-do-list/logo";

const navLinks = [
  { name: "Home", href: "/to-do-list", icon: HomeIcon },
  {
    name: "To-do's",
    href: "/to-do-list/to-do",
    icon: DocumentCheckIcon,
  },
  {
    name: "Account",
    href: "/to-do-list/account",
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
