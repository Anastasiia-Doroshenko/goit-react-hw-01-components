import TransactionItem from "./TransactionItem";
import css from './TransactionHistory.module.css';

function Transactions({items}){
    return <table>
    <thead className={css.thead}>
      <tr>
        <th className={css.label}>Type</th>
        <th className={css.label}>Amount</th>
        <th className={css.label}>Currency</th>
      </tr>
    </thead>
  
    <tbody className={css.tbody}>
        {items.map(item=>(
          <TransactionItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          />
        ))}
    </tbody>
  </table>
}

export default Transactions;