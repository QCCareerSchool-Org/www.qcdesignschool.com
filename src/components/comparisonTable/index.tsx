import type { ReactElement, ReactNode } from 'react';

import styles from './index.module.scss';

export interface ComparisonTableColumn<T extends string = string> {
  key: T;
  heading: ReactNode;
}

export type ComparisonTableRow<T extends string = string> = {
  feature: string;
} & Record<T, ReactNode>;

interface Props<T extends string = string> {
  columns: readonly ComparisonTableColumn<T>[];
  rows: readonly ComparisonTableRow<T>[];
}

// eslint-disable-next-line @stylistic/comma-dangle
export const ComparisonTable = <T extends string = string,>({ columns, rows }: Props<T>): ReactElement => (
  <div className={`${styles.tableWrapper} table-responsive`}>
    <table className={`${styles.table} table table-bordered align-middle mb-0`}>
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
