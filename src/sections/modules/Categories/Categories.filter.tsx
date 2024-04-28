"use client";

import { Icon } from "@/components/general";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function CategoriesFilter({
  categories,
}: {
  categories: string[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState<string>(
    searchParams.get("category") ?? ""
  );

  const change = useCallback(
    (category: string) => {
      let query = { ...Object.fromEntries(searchParams) };
      query["category"] = (category !== ""
        ? category
        : undefined) as unknown as string;

      Object.keys(query).filter((key) => {
        if (
          !query[key as keyof typeof query] ||
          query[key as keyof typeof query] == ""
        ) {
          delete query[key as keyof typeof query];
        }
      });

      router.push(`?${new URLSearchParams(query as {}).toString()}`);
    },
    [searchParams]
  );

  useEffect(() => {
    change(category);
  }, [category]);

  return (
    <div className="categories__list">
      <button onClick={() => setCategory("")}>
        <figure>
          <Icon type="category" />
        </figure>
        <p>Todas</p>
      </button>
      {categories?.length ?? 0 > 0
        ? categories.map((category, i) => {
            return (
              <button
                key={`category-item-${category}-${i}`}
                onClick={() => setCategory(category)}
              >
                <figure>
                  <Icon type="category" />
                </figure>
                <p>{category}</p>
              </button>
            );
          })
        : null}
    </div>
  );
}
