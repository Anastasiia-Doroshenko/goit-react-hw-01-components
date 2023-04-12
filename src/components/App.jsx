import Profile from './profile/Profile';
import user from './profile/user';

import Statistics from './statistics/Statistics';
import data from './statistics/data.json';

import FriendList from './friends/FriendList';
import friends from './friends/friends.json';

import Transactions from './transactions/TransactionHistory';
import transaction from './transactions/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics 
      title='Upload stats'
        stats={data}
      />

       <FriendList
      friends={friends}
      />
      
        <Transactions
      items={transaction}
      />
</div>
  );
};
