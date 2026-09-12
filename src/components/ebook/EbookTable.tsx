interface TableColumn {
  header: string;
  accessor: string;
}

interface TableRow {
  [key: string]: string;
}

interface EbookTableProps {
  columns: TableColumn[];
  data: TableRow[];
  caption?: string;
}

const EbookTable = ({ columns, data, caption }: EbookTableProps) => {
  return (
    <div className="my-5">
      <table className="w-full border-collapse text-[0.7rem] border border-gray-200">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="bg-foreground text-white text-left p-2 uppercase tracking-wide text-[0.65rem]"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 1 ? "bg-cream" : "bg-white"}>
              {columns.map((col) => (
                <td key={col.accessor} className="border-b border-gray-100 p-2 align-top">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="text-[0.7rem] text-gray-500 italic mt-2">{caption}</p>
      )}
    </div>
  );
};

export default EbookTable;
