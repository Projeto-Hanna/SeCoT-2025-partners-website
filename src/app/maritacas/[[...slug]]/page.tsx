"use client"

import { DataTable } from "@/components"
import { jogosColumns, jogosData } from "@/data/jogos"
import { twcn } from "@/utils/style"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button, Input, Text } from "retro-react"

export default function Maritacas({}: {
  params: Promise<{ slug?: string[] }>
}) {
  const [filter, setFilter] = useState<string | undefined>();
  const [shuffledJogosArray, setShuffledJogosArray] = useState(jogosData);
  const [bad, setBad] = useState<boolean>(false);

  const processInput = (e: any) => {
    const value = e.target.value as string;
    if (value) {
      if (value.toLocaleLowerCase().split(' ').join() === 'bloodrush') {
        setBad(true);
      }

      setFilter(value);
    } else {
      setBad(false);
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
      { bad && <Image className="z-999 absolute min-h-screen min-w-screen" src="/ads/port.jpg" alt="Bad input" height={100} width={100}></Image>}

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
