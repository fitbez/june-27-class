import "./App.css";
import FriendsPage from "./components/FriendsPage";
import HomePage from "./components/HomePage";
import Wrapper from "./components/Wrapper";
import imageOne from "./assets/images/image_one.png";
import imageTwo from "./assets/images/image_two.png";
import imageThree from "./assets/images/image_three.png";

function App() {
  const friends = [
    {
      id: 1,
      image: imageOne,
      name: "John Doe",
      title: "Front end dev",
      callMobile: "123578900",
    },
    {
      id: 2,
      image: imageTwo,
      name: "Eric Johnatan",
      title: "CTO",
      callMobile: "918309834098",
    },
    {
      id: 3,
      image: imageThree,
      name: "Metin Khaled",
      title: "Team Lead",
      callMobile: "838092382",
    },
    {
      id: 4,
      image: imageTwo,
      name: "Rosa Ian",
      title: "QA Lead",
      callMobile: "098392380",
    },
  ];
  return (
    <div className='container'>
      <Wrapper>
        <HomePage friends={friends} />
        <FriendsPage friends={friends} />
      </Wrapper>
    </div>
  );
}

export default App;
