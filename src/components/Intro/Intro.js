import React from 'react';
import './Intro.scss';
import intro from '../../img/intro-image.png';

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-body">
          <div className="intro-content">
            <h1 className="intro-header">BIld your library</h1>
            <div className="intro-description">
              Over 400.000 books from fiction to the business literature
            </div>
            <button className="intro-button" type="button">
              Let’s start
            </button>
          </div>
          <div className="intro-image">
            <img src={intro} alt="intro-image" height="358" width="668" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
