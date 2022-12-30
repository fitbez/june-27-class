import FriendsList from "./FriendsList";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HomePage = (props) => {
  return (
    <div style={StyledHomePage}>
      <Header title='Friends Directory' />
      <SearchBar />
      <FriendsList friends={props.friends} />
    </div>
  );
};

const StyledHomePage = {
  width: "50%",
  backgroundColor: "#FFF59D",
};

export default HomePage;
