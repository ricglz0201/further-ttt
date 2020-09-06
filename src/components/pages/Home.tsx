import HomeButton from 'components/Home/HomeButton';
import React from 'react';

function Home() {
  return (
    <nav className="items-center flex justify-center vh-100">
      <ul className="flex flex-column h-100 justify-evenly list">
        <HomeButton text="Single Player" url="/single-player" />
        <HomeButton text="Multi Player" url="/multi-player" />
      </ul>
    </nav>
  );
}

export default Home;
