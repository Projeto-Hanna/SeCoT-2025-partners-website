"use client";

import { EntityContext } from "@/context/entity";
import { EntitiesEnum } from "@/types/entities";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function Home() {
  const context = useContext(EntityContext);

  useEffect(() => {
    context?.setEntity(EntitiesEnum.SECOT);
  });

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </main>
  );
}
