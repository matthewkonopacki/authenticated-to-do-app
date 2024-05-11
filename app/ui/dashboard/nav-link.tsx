import { ForwardRefExoticComponent } from "react";
import Link from "next/link";

export default function NavLink(props: {
  name: string;
  href: string;
  icon?: ForwardRefExoticComponent<any>;
}) {
  const LinkIcon = props.icon;
  return (
    <Link
      href={props.href}
      className="flex items-center pl-7 gap-1.5 h-14 w-full rounded-md bg-background-100 hover:bg-highlight-100 hover:text-text-200"
    >
      {LinkIcon != null ? <LinkIcon className="w-6"></LinkIcon> : ""}
      <p className="">{props.name}</p>
    </Link>
  );
}
