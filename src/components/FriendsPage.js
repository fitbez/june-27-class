import FriendsDetail from "./FriendsDetail";
import Header from "./Header";

const FriendsPage = ({ friends }) => {
  return (
    <div style={StyledHomePage}>
      <Header title='Employee' />
      <FriendsDetail friends={friends} />
    </div>
  );
};

const StyledHomePage = {
  width: "50%",
  backgroundColor: "#80DEEA",
};

export default FriendsPage;
