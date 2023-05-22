"use client";

import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { Icon } from "../../../desing/font-awnsome-icons";
import type { ListedIcons } from "../../../entities/icons";

interface ClickableLinksProps extends LinkProps {
  linkName: string;
  href: string;
  fontAwsomeKey?: ListedIcons;
}

export function ClickableLinks({
  linkName,
  href,
  fontAwsomeKey,
  ...restProps
}: ClickableLinksProps) {
  const currentPath = usePathname();
  return (
    <>
      {fontAwsomeKey && <Icon use={fontAwsomeKey} />}
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
