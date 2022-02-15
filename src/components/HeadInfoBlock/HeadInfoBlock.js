import React from 'react';
import './HeadInfoBlock.scss';
import headInfoBlock from '../../img/headInfoBlock-image.png';

const HeadInfoBlock = () => {
  return (
    <section className="headInfoBlock">
      <div className="container">
        <div className="headInfoBlock-body">
          <div className="headInfoBlock-content">
            <h1 className="headInfoBlock-header">BIld your library</h1>
            <div className="headInfoBlock-description">
              Over 400.000 books from fiction to the business literature
            </div>
            <button className="headInfoBlock-button" type="button">
              Let’s start
            </button>
          </div>
          <div className="headInfoBlock-image">
            <img src={headInfoBlock} alt="headInfoBlock-image" height="358" width="668" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadInfoBlock;
