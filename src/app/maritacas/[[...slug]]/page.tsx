"use client"

import { DataTable } from "@/components"
import { jogosColumns, jogosData } from "@/data/jogos"
import { twcn } from "@/utils/style"
import { useEffect, useState } from "react"
import { Button, Input, Text } from "retro-react"

export default function Maritacas({}: {
  params: Promise<{ slug?: string[] }>
}) {
  const [filter, setFilter] = useState<string | undefined>();
  const [shuffledJogosArray, setShuffledJogosArray] = useState(jogosData);

  const processInput = (e: any) => {
    const value = e.target.value as string;
    if (value) {
      setFilter(value);
    } else {
      setFilter(undefined);
    }
  };

  const shuffleArray = () => {
    const newShuffledJogosArray = [...jogosData.sort(() => Math.random() - 0.5)];
    setShuffledJogosArray(newShuffledJogosArray);
  };

  useEffect(() => {
    shuffleArray();
  }, []);

  return (
    <main>
      <Text sx={twcn("text-center font-bold mb-4")}>
        Confira os jogos da Maritacas GameDev!
      </Text>

      <div>
        <Input sx={twcn("text-sm p-2 font-bold")} variant="classic" placeholder="Busque um jogo" onChange={processInput}/>
        <Button variant="primary" onClick={processInput}>Resetar</Button>
      </div>

      <div className="mt-2 mb-2">
        <Button variant="primary" onClick={shuffleArray}>Misturar jogos</Button>
      </div>
      <DataTable
        columns={jogosColumns}
        data={shuffledJogosArray.filter(jogo => !filter || jogo.nome.toLocaleLowerCase().includes(filter) )}
      />
    </main>
  )
}
