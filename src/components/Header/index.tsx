"use client";

import Image from "next/image";
import { useContext } from "react";

import { EntityContext } from "@/context/entity";
import { EntitiesEnum } from "@/types/entities";
import Link from "next/link";

type EntityHeaderData = {
  href: string;
  imageSrc: string;
};

const entities: Record<EntitiesEnum, EntityHeaderData> = {
  secot: {
    href: "/",
    imageSrc: "/entities/logo-secot-horizontal.png",
  },
  hackoonspace: {
    href: "/hackoonspace",
    imageSrc: "/entities/logo-secot-horizontal.png",
  },
  maritacas: {
    href: "/maritacas",
    imageSrc: "/entities/logo-secot-horizontal.png",
  },
  hanna: {
    href: "/hanna",
    imageSrc: "/entities/logo-secot-horizontal.png",
  },
};

export const Header = () => {
  const context = useContext(EntityContext);

  const entity = entities[context?.entity ?? EntitiesEnum.SECOT];

  return (
    <header className="min-h-20 w-full bg-red-600 flex ">
      <Link href={entity.href}>
        <Image
          src={entity.imageSrc}
          alt="Logo da SeCoT branca"
          className="p-2"
          width={190}
          height={50}
          priority
        />
      </Link>
    </header>
  );
};
