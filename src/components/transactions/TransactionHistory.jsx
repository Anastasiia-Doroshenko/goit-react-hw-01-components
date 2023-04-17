import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function Transactions({ items }) {
  return (
    <table>
      <thead className={css.thead}>
        <tr>
          <th className={css.label}>Type</th>
          <th className={css.label}>Amount</th>
          <th className={css.label}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Transactions;
