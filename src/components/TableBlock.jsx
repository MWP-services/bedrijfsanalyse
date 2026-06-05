export default function TableBlock({ title, columns, rows }) {
  return (
    <div className="table-block">
      <h4>{title}</h4>
      <div className="table-scroll">
        <table>
          <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
          <tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  )
}
