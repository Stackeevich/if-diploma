import React from 'react';
import '../YourOrders.scss';
import { useSelector } from 'react-redux';
import Slider from './Slider';

const WaitingFor = () => {
  const waitingForBooks = useSelector((state) => state.waitingForBooks.waitingForBooks);

  return (
    <div className="waiting-for">
      <h2 className="waiting-for_header">Waiting for</h2>
      <Slider />
      <div
        className="main-body_alert"
        style={{ display: waitingForBooks.length === 0 ? 'block' : 'none' }}
      >
        <p>Oops! You are not waiting for any book</p>
      </div>
    </div>
  );
};

export default WaitingFor;
