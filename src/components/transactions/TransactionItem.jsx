import PropTypes from 'prop-types';

const TransactionItem = ({id, type, amount, currency}) => {
    return <tr key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
}

TransactionItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

export default TransactionItem;