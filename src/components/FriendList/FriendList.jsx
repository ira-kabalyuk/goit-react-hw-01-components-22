
import { FriendListItem } from './FriendListItem'
import PropTypes from 'prop-types';
import styles from './FriendList.module.scss'

const FriendList = ({cards}) => {
  return (
    <ul className={styles.friendList}>
      {cards.map(({id, isOnline, avatar, name}) => (
        <FriendListItem
          key={id}
          status={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
}

export {FriendList}