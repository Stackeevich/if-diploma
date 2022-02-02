import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../Main';

const AboutBook = () => {
  const { id } = useParams();
  const allBooks = useSelector((state) => state.books.books);
  const [book, setBook] = useState(null);
  const [hiddenDescription, setHiddenDescription] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const elRef = useRef();
  const dispatch = useDispatch();
  const takenBooks = useSelector((state) => state.takenBooks.takenBooks);

  useEffect(() => {
    setBook(allBooks.find((item) => item.id === id));
  }, []);

  function createMarkup() {
    return { __html: book.description };
  }

  useLayoutEffect(() => {
    if (elRef.current && hiddenDescription && elRef.current.lastElementChild !== elRef.current.firstElementChild) {
      elRef.current.lastElementChild.style.display = 'none';
    }
  });

  const showMore = (e) => {
    e.preventDefault();
    if (hiddenDescription) {
      setHiddenDescription(false);
      setExpanded(true);
      elRef.current.lastElementChild.style.display = 'block';
    } else {
      setHiddenDescription(true);
      setExpanded(false);
      if (elRef.current.lastElementChild !== elRef.current.firstElementChild) {
        elRef.current.lastElementChild.style.display = 'none';
      }
    }
  };

  if (book === null) {
    return <Main />;
  }
  return (
    <main className="main">
      <div className="container">
        <div className="main-body">
          <div className="your-orders">
            <div className="order-body">
              <div className="order-image">
                <img src={book.imageUrl} alt={book.name} />
              </div>
              <div className="order-content">
                <div className="order-stars">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57885 0.92705C9.87821 0.00573897 11.1816 0.00573993 11.481 0.927051L13.1051 5.92564C13.239 6.33766 13.6229 6.61662 14.0562 6.61662H19.312C20.2807 6.61662 20.6835 7.85624 19.8998 8.42564L15.6477 11.5149C15.2972 11.7696 15.1506 12.221 15.2845 12.633L16.9086 17.6316C17.2079 18.5529 16.1535 19.319 15.3697 18.7496L11.1177 15.6603C10.7672 15.4057 10.2926 15.4057 9.94213 15.6603L5.69007 18.7496C4.90635 19.319 3.85188 18.5529 4.15123 17.6316L5.77537 12.633C5.90924 12.221 5.76258 11.7696 5.4121 11.5149L1.16004 8.42564C0.376328 7.85624 0.779104 6.61662 1.74783 6.61662H7.00366C7.43688 6.61662 7.82084 6.33766 7.95471 5.92564L9.57885 0.92705Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57885 0.92705C9.87821 0.00573897 11.1816 0.00573993 11.481 0.927051L13.1051 5.92564C13.239 6.33766 13.6229 6.61662 14.0562 6.61662H19.312C20.2807 6.61662 20.6835 7.85624 19.8998 8.42564L15.6477 11.5149C15.2972 11.7696 15.1506 12.221 15.2845 12.633L16.9086 17.6316C17.2079 18.5529 16.1535 19.319 15.3697 18.7496L11.1177 15.6603C10.7672 15.4057 10.2926 15.4057 9.94213 15.6603L5.69007 18.7496C4.90635 19.319 3.85188 18.5529 4.15123 17.6316L5.77537 12.633C5.90924 12.221 5.76258 11.7696 5.4121 11.5149L1.16004 8.42564C0.376328 7.85624 0.779104 6.61662 1.74783 6.61662H7.00366C7.43688 6.61662 7.82084 6.33766 7.95471 5.92564L9.57885 0.92705Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57885 0.92705C9.87821 0.00573897 11.1816 0.00573993 11.481 0.927051L13.1051 5.92564C13.239 6.33766 13.6229 6.61662 14.0562 6.61662H19.312C20.2807 6.61662 20.6835 7.85624 19.8998 8.42564L15.6477 11.5149C15.2972 11.7696 15.1506 12.221 15.2845 12.633L16.9086 17.6316C17.2079 18.5529 16.1535 19.319 15.3697 18.7496L11.1177 15.6603C10.7672 15.4057 10.2926 15.4057 9.94213 15.6603L5.69007 18.7496C4.90635 19.319 3.85188 18.5529 4.15123 17.6316L5.77537 12.633C5.90924 12.221 5.76258 11.7696 5.4121 11.5149L1.16004 8.42564C0.376328 7.85624 0.779104 6.61662 1.74783 6.61662H7.00366C7.43688 6.61662 7.82084 6.33766 7.95471 5.92564L9.57885 0.92705Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57885 0.92705C9.87821 0.00573897 11.1816 0.00573993 11.481 0.927051L13.1051 5.92564C13.239 6.33766 13.6229 6.61662 14.0562 6.61662H19.312C20.2807 6.61662 20.6835 7.85624 19.8998 8.42564L15.6477 11.5149C15.2972 11.7696 15.1506 12.221 15.2845 12.633L16.9086 17.6316C17.2079 18.5529 16.1535 19.319 15.3697 18.7496L11.1177 15.6603C10.7672 15.4057 10.2926 15.4057 9.94213 15.6603L5.69007 18.7496C4.90635 19.319 3.85188 18.5529 4.15123 17.6316L5.77537 12.633C5.90924 12.221 5.76258 11.7696 5.4121 11.5149L1.16004 8.42564C0.376328 7.85624 0.779104 6.61662 1.74783 6.61662H7.00366C7.43688 6.61662 7.82084 6.33766 7.95471 5.92564L9.57885 0.92705Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57885 0.92705C9.87821 0.00573897 11.1816 0.00573993 11.481 0.927051L13.1051 5.92564C13.239 6.33766 13.6229 6.61662 14.0562 6.61662H19.312C20.2807 6.61662 20.6835 7.85624 19.8998 8.42564L15.6477 11.5149C15.2972 11.7696 15.1506 12.221 15.2845 12.633L16.9086 17.6316C17.2079 18.5529 16.1535 19.319 15.3697 18.7496L11.1177 15.6603C10.7672 15.4057 10.2926 15.4057 9.94213 15.6603L5.69007 18.7496C4.90635 19.319 3.85188 18.5529 4.15123 17.6316L5.77537 12.633C5.90924 12.221 5.76258 11.7696 5.4121 11.5149L1.16004 8.42564C0.376328 7.85624 0.779104 6.61662 1.74783 6.61662H7.00366C7.43688 6.61662 7.82084 6.33766 7.95471 5.92564L9.57885 0.92705Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="order-title">
                  <h2>{book.name}</h2>
                </div>
                <div className="order-author">
                  <h3>{book.author}</h3>
                </div>
                <div className="order-pages">
                  <p>
                    {book.length}, released in {book.released}
                  </p>
                </div>
                <button
                  className="order-button"
                  onClick={(e) => {
                    e.preventDefault();
                    takenBooks.find((i) => i.id === book.id)
                      ? dispatch({ type: 'WAITING_FOR_BOOKS', payload: book })
                      : dispatch({ type: 'TAKE_BOOKS', payload: book });
                  }}
                >
                  Order
                </button>
                <div className="order-about-header">
                  <h3>About book</h3>
                </div>
                <div
                  className="order-about-text"
                  ref={elRef}
                  dangerouslySetInnerHTML={createMarkup()}
                />
                <button className="order-about-button" onClick={showMore}>
                  {!expanded ? 'Show more' : 'Hide'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutBook;
