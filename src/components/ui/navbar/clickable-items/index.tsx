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
  console.log("🚀 ~ file: index.tsx:23 ~ currentPath:", currentPath === href);

  return (
    <div className={styles["link"]}>
      {currentPath === href && (
        <Icon use={fontAwsomeKey} size="xs" data-testid="active-icon" />
      )}
      <Link
        href={href}
        {...restProps}
        className={currentPath === href ? styles["active-link-color"] : ""}
      >
        {linkName}
      </Link>
    </div>
  );
}
