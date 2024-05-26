import { ForwardRefExoticComponent } from "react";
import Link from "next/link";

export default function NavLink(props: {
  name: string;
  href: string;
  icon?: ForwardRefExoticComponent<any>;
}) {
  const LinkIcon = props.icon;
  return (
    <a href={props.href} className="btn">
      {LinkIcon != null ? <LinkIcon className="w-6"></LinkIcon> : ""}
      <p className="">{props.name}</p>
    </a>
  );
}
