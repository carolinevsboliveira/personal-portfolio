"use client";

import type { LinkProps } from "next/link";
import Link from "next/link";

interface ClickableLinksProps extends LinkProps {
  linkName: string;
  href: string;
}

export function ClickableLinks({
  linkName,
  href,
  ...restProps
}: ClickableLinksProps) {
  return (
    <Link href={href} {...restProps}>
      {linkName}
    </Link>
  );
}
