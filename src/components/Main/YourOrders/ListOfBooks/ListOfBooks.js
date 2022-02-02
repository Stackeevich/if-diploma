import React from 'react';
import '../YourOrders.scss';
import '../../AllBooks/AllBooks.scss';
import Slider from './Slider';
import { useSelector } from 'react-redux';

const ListOfBooks = () => {
  const takenBooks = useSelector((state) => state.takenBooks.takenBooks);

  return (
    <div className="list-of-books">
      <h2 className="waiting-for_header">List of your books</h2>
      <Slider />
      <div className="main-body_alert" style={{ display: takenBooks.length === 0 ? 'block' : 'none'}}>
        <p>Oops! You haven't added any book yet</p>
      </div>
    </div>
  );
};

export default ListOfBooks;
