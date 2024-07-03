import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;

  return (
    <Link
      className={clsx(
        "rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary",
        active ? "bg-secondary text-primary" : "text-secondary",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
