export const TransactionsList = ({ transactions }) => {
  const { type, amount, currency } = transactions;

    return <>
     <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
}