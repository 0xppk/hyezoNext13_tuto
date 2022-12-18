"use client";

import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Nav({ link, children }: { link: string; children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  const active = link === `/${segment}`

  return <Link className={active ? "text-red-800" : ""} href={link}>{children}</Link>;
}
