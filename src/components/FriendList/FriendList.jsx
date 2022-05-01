import styles from './FriendList.module.scss'
import {FriendListItem} from './FriendListItem'

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

export {FriendList}