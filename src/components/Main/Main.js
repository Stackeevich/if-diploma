import React from 'react';
import './Main.scss';
import AllBooks from './AllBooks/AllBooks';

const Main = () => {

  return (
    <main className="main">
      <div className="container">
        <div className="main-body">
          <AllBooks />
        </div>
      </div>
    </main>
  );
};

export default Main;
