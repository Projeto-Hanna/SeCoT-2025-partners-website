type Props = {
  columns: string[];
};

export const TableHeader = ({ columns }: Props) => {
  return (
    <thead className="table-auto">
      <tr>
        {columns.map((column, index) => {
          return <th key={`table-header-column-${index}`}>{column}</th>;
        })}
      </tr>
    </thead>
  );
};
