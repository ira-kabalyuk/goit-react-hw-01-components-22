import PropTypes, { string } from 'prop-types';
import cx from 'classnames';
import styles from './FriendListItem.module.scss';

const FriendListItem = ({status, avatar, name}) => {
  return (
    <li className={styles.item}>
      <span className={cx(styles.status, status && styles.online)}>{status}</span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  statusClassName: PropTypes.string,
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export {FriendListItem}