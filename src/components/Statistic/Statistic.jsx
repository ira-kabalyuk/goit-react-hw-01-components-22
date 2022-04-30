import PropTypes from 'prop-types';
import styles from './Statistic.module.scss'

const title = 'Upload stats'

const colors = [
  '#F984E5',
  '#CED23A',
  '#FFB02E',
  '#6495ED',
  '#FD7C6E',
]

const Statistic = ({ items }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li style={{ 'background': colors[index] }} className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


Statistic.propTypes = {
  items: PropTypes.array.isRequired,
}


export {Statistic}