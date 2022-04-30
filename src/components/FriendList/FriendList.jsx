import styles from './FriendList.module.scss'
import {FriendListItem} from './FriendListItem'

const FriendList = ({cards}) => {
  return (
    <ul className={styles.friendList}>
      {cards.map(card => (
        <FriendListItem
          statusClassName={card.isOnline ? styles.online : styles.offline}
          key={card.id}
          status={card.isOnline}
          avatar={card.avatar}
          name={card.name}
        />
      ))}
    </ul>
  )
}

export {FriendList}