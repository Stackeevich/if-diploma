import React from 'react';
import './YourOrders.scss';
import ListOfBooks from './ListOfBooks/ListOfBooks';
import WaitingFor from './WaitingFor/WaitingFor';

const YourOrders = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main-body">
          <WaitingFor />
          <ListOfBooks />
        </div>
      </div>
    </main>
  );
};

export default YourOrders;
