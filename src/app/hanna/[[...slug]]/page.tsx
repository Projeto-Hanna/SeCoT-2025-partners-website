"use client"

import { twcn } from "@/utils/style"
import { Button, Input, Text } from "retro-react"
import Image from "next/image"
import { projetosColumns, projetosData } from "@/data/projetos"
import { useEffect, useState } from "react"
import { DataTable } from "@/components"

export default function Hanna({}: { params: Promise<{ slug?: string[] }> }) {
    const [filter, setFilter] = useState<string | undefined>();
    const [bad, setBad] = useState<boolean>(false);
  
    const processInput = (e: any) => {
      const value = e.target.value as string;
      if (value) {
        if (value.toLocaleLowerCase().split(' ').join() === 'reversa') {
          setBad(true);
        }
  
        setFilter(value);
      } else {
        setBad(false);
        setFilter(undefined);
      }
    };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      { bad && 
        <div className="flex flex-1 gap-10 flex-col text-center align-center justify-center">
          <Text sx={twcn("text-center font-bold")}>Que que cê veio explorar pra cá, meu fiu?</Text>
          <Image
            className="h-auto hover:opacity-75 pointer ml-auto mr-auto"
            src="/entities/hanna/reversa.png"
            alt="Logo da Hanna Reversa"
            width={550}
            height={35}
            priority
          />
          <Text sx={twcn("text-center font-bold mb-2")}>Se eu fosse você, eu vortava já</Text>
          <div className="mt-2 mb-2">
            <Button variant="primary" onClick={() => window.location.reload()}>Vortar já</Button>
          </div>
        </div>
      }

    {
      !bad &&
        <>
          <div>
            <Input sx={twcn("text-sm p-2 font-bold")} variant="classic" placeholder="Busque um projeto" onChange={processInput}/>
            <Button variant="primary" onClick={processInput}>Resetar</Button>
          </div>

          <DataTable
            columns={projetosColumns.filter((column: any) => windowWidth > 800 || (windowWidth < 800 && ['nome', 'link'].includes(column.accessorKey)))}
            data={projetosData.filter(projeto => !filter || projeto.nome.toLocaleLowerCase().includes(filter) )}
          />
        </>
    }

    </main>
  );
}

