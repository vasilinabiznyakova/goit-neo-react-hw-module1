import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headerRow}>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index % 2 === 0 ? css.rowEven : css.rowOdd}>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
