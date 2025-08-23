import { TableHeader } from "../TableHeader";
import { TableItem } from "../TableItem";

const games = [
  {
    image: "",
    title: "",
    description: "",
    genres: ["", ""],
  },
];

export const Table = () => {
  return (
    <table className="table-auto">
      <TableHeader columns={["imagem", "nome", "descrição", "gêneros"]} />
      <tbody>
        {games.map((game, index) => {
          return (
            <TableItem
              key={`table-item-${index}`}
              columns={[
                {
                  type: "text",
                  data: "oii!!",
                },
                {
                  type: "text",
                  data: "oii!!",
                },
                {
                  type: "text",
                  data: "oii!!",
                },
                {
                  type: "text",
                  data: "oii!!",
                },
              ]}
            />
          );
        })}
      </tbody>
    </table>
  );
};
