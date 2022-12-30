import FriendsListItem from "./FriendsListItem";

const FriendsList = (props) => {
  return (
    <div>
      <FriendsListItem friends={props.friends} />
    </div>
  );
};

export default FriendsList;
