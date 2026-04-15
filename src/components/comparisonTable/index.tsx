import type { FC, ReactNode } from 'react';

export interface ComparisonTableColumn {
  key: string;
  heading: ReactNode;
}

export type ComparisonTableRow = {
  feature: string;
} & Record<string, string>;

interface Props {
  columns: ComparisonTableColumn[];
  rows: ComparisonTableRow[];
}

export const ComparisonTable: FC<Props> = ({ columns, rows }) => (
  <div className="table-responsive">
    <table className="table table-bordered align-middle mb-0">
      <thead>
        <tr>
          <th scope="col">Feature</th>
          {columns.map(column => (
            <th scope="col" key={column.key}>{column.heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.feature}>
            <th scope="row">{row.feature}</th>
            {columns.map(column => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
