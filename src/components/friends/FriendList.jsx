import FriendItem from './FriendListItem';

import css from './FriendList.module.css';

function FriendList({friends}){
    return <ul className={css.list}>
       {friends.map(friend=>(
            <FriendItem
             key={friend.id}
             name={friend.name}
             avatar={friend.avatar}
             isOnline={friend.isOnline}
            />
       ))}
  </ul>
}

export default FriendList;