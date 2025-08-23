import Image from "next/image";

type TableItemImageColumn = {
  type: "image";
  data: string;
};

type TableItemTextColumn = {
  type: "text";
  data: string;
};

type TableItemTextArrayColumn = {
  type: "text-array";
  data: string[];
};

type TableItemColumn =
  | TableItemImageColumn
  | TableItemTextColumn
  | TableItemTextArrayColumn;

type Props = {
  columns: TableItemColumn[];
};

export const TableItem = ({ columns }: Props) => {
  return (
    <tr>
      {columns.map((column, index) => {
        let data;

        switch (column.type) {
          case "image":
            data = <Image src={column.data} height={50} width={50} alt="" />;
            break;
          case "text":
            data = <p>{column.data}</p>;
            break;
          case "text-array":
            data = <p>{column.data.map((d) => d).join(", ")}</p>;
        }

        return <td key={`table-item-column-${index}`}>{data}</td>;
      })}
    </tr>
  );
};
