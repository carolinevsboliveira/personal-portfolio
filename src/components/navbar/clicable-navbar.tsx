"use client";

import Link from "next/link";
type ClickableLinksProps = {
  linkName: string;
  href: string;
};

export function ClickableLinks({ linkName, href }: ClickableLinksProps) {
  return <Link href={href}>{linkName}</Link>;
}
