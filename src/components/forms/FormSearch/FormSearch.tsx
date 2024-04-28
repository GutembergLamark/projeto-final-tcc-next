"use client";

import { Icon } from "@/components/general";
import style from "./FormSearch.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Book, FormSearchProps } from "./FormSearch.interfaces";
import { useRouter, useSearchParams } from "next/navigation";

export function FormSearch({ cachedBooks }: FormSearchProps) {
  const [active, setActive] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<Book[]>([] as Book[]);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setList(
      search != ""
        ? cachedBooks
            ?.filter((v) =>
              v.title.toLowerCase().includes(search.toLowerCase())
            )
            ?.slice(0, 6) ?? []
        : []
    );
  }, [search]);

  return (
    <form className={style.search}>
      <fieldset
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target?.closest("fieldset")) {
            const input = ref?.current;
            input && input.focus();
            setActive(true);
          }
        }}
        data-active={active ? "active" : ""}
      >
        <Icon type="search" />
        <input
          ref={ref}
          type="text"
          placeholder="Buscar por livro"
          onBlur={(e) => {
            !e?.target?.value && setActive(false);
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </fieldset>
    </form>
  );
}
