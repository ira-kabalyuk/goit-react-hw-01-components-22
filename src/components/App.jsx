import { Profile } from './Profile';
import { Statistic } from './Statistic';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory'
import { Container } from './Container'



import user from '../configs/user.json';
import statistic from '../configs/statistic.json';
import friends from '../configs/friends.json';
import transactions from '../configs/transactions.json'


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic items={statistic} />
      <FriendList cards={friends} />
      <TransactionHistory items={transactions}/>
    </Container>
  );
};
