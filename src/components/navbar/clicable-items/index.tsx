"use client";

import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

interface ClickableLinksProps extends LinkProps {
  linkName: string;
  href: string;
}

export function ClickableLinks({
  linkName,
  href,
  ...restProps
}: ClickableLinksProps) {
  const currentPath = usePathname();
  return (
    <>
      <Link
        href={href}
        {...restProps}
        className={currentPath === href ? styles["active-link"] : ""}
      >
        {linkName}
      </Link>
    </>
  );
}
