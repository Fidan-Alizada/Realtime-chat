import React from 'react';
import Chat from './components/Chat';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
