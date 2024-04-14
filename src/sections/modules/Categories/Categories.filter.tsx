"use client";

import { Icon } from "@/components/general";
import { useState } from "react";

export default function CategoriesFilter() {
  const [category, setCategory] = useState<string>("");

  return (
    <div className="categories__list">
      <button>
        <figure>
          <Icon type="category" />
        </figure>
        <p>Ficção</p>
      </button>
      <button>
        <figure>
          <Icon type="category" />
        </figure>{" "}
        <p>Romance</p>
      </button>
      <button>
        <figure>
          <Icon type="category" />
        </figure>{" "}
        <p>Biografia</p>
      </button>
      <button>
        <figure>
          <Icon type="category" />
        </figure>{" "}
        <p>Literatura infantil</p>
      </button>
    </div>
  );
}
