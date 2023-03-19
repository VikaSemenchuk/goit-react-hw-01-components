import { TransactionsList } from './TransactionsList';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TransactionsList transactions={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
