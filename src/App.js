import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import React from "react";
import imageOne from "./images/image_one.png";
import imageTwo from "./images/image_two.png";
import imageThree from "./images/image_three.png";

function App() {
  return (
    <div className='container'>
      <Title />
      <Wrapper>
        <FriendCard
          image={imageOne}
          name='John'
          occupation='Front-End Engineer'
          location='DC'
        />
        <FriendCard
          image={imageTwo}
          name='Evan'
          occupation=' Back-End Engineer'
          location='VA'
        />
        <FriendCard
          image={imageThree}
          name='Donell'
          occupation='Front-End Architect'
          location='Portland'
        />
        <FriendCard
          image={imageThree}
          name='Fitsum'
          occupation='Front-End Architect'
          location='Maryland'
        />
      </Wrapper>
    </div>
  );
}

export default App;
