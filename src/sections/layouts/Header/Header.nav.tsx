"use client";

import { FormSearch } from "@/components/forms";
import { Icon } from "@/components/general";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderNavProps } from "./Header.interfaces";

export default function HeaderNav({ responsivity }: HeaderNavProps) {
  const pathname = usePathname()?.replace("/", "");
  const [active, setActive] = useState<
    "dashboard" | "library" | "bookmarks" | "profile"
  >((pathname as "dashboard") ?? "dashboard");

  useEffect(() => {
    setActive(pathname as "dashboard");
  }, [pathname]);

  return (
    <>
      {responsivity == "desktop" ? <FormSearch cachedBooks={[]} /> : null}

      <nav
        className={`header__nav ${
          responsivity == "mobile" ? "mobile-only" : "desktop-only"
        }`}
      >
        <Link
          href={"/dashboard"}
          data-active={active == "dashboard" ? active : ""}
        >
          <Icon type="dashboard" />
          <Icon type="dashboard_yellow" />
        </Link>

        <Link href={"/library"} data-active={active == "library" ? active : ""}>
          <Icon type="book" />
          <Icon type="book_yellow" />
        </Link>

        <Link
          href={"/bookmarks"}
          data-active={active == "bookmarks" ? active : ""}
        >
          <Icon type="bookmark" />
          <Icon type="bookmark_yellow" />
        </Link>

        <Link href={"/profile"} data-active={active == "profile" ? active : ""}>
          <Icon type="profile" />
          <Icon type="profile_yellow" />
        </Link>
      </nav>
    </>
  );
}
