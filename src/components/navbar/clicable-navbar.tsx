"use client";

import Link from "next/link";

export function ClickableLinks({ linkName }: { linkName: string }) {
  return <Link href="#">{linkName}</Link>;
}
