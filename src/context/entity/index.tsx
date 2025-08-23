"use client";

import { createContext, ReactNode, useState } from "react";
import { EntitiesEnum } from "@/types/entities";

const defaultValue = EntitiesEnum.SECOT;

interface EntityContextType {
  entity: EntitiesEnum;
  setEntity: React.Dispatch<React.SetStateAction<EntitiesEnum>>;
}
export const EntityContext = createContext<EntityContextType | undefined>(
  undefined
);

interface EntityProviderProps {
  children: ReactNode;
}

export const EntityProvider = ({ children }: EntityProviderProps) => {
  const [entity, setEntity] = useState(defaultValue);

  return (
    <EntityContext.Provider value={{ entity, setEntity }}>
      {children}
    </EntityContext.Provider>
  );
};
