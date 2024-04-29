"use client";

import { Icon } from "@/components/general";
import style from "./FormSearch.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Book, CachedBook, FormSearchProps } from "./FormSearch.interfaces";
import { useRouter, useSearchParams } from "next/navigation";
import parse from "html-react-parser";
import Link from "next/link";

export function FormSearch({ cachedBooks }: FormSearchProps) {
  const [active, setActive] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<CachedBook[]>([] as CachedBook[]);
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

      {list && list?.length > 0 ? (
        <div className={style["search__results"]}>
          {list?.length > 0 && list
            ? list?.map((item) => (
                <Link
                  href={item?.url ?? "/"}
                  key={item?.title}
                  onClick={() => {
                    setSearch("");
                  }}
                >
                  {search != ""
                    ? parse(
                        item?.title?.replace(
                          new RegExp(search, "gi"),
                          "<strong>$&</strong>"
                        ) ?? ""
                      )
                    : item?.title}
                </Link>
              ))
            : null}
        </div>
      ) : null}
    </form>
  );
}
