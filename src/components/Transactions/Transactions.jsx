import PropTypes from 'prop-types';
import s from './Transactions.module.css';

const Transactions = ({ transactions }) => {
  return (
    <table className={s['transaction-history']}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(element => (
          <tr key={element.id} className={s.row}>
            <td className={s.data}>{element.type}</td>
            <td className={s.data}>{element.amount}</td>
            <td className={s.data}>{element.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};
export default Transactions;
