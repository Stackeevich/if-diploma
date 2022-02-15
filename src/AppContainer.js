import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeadInfoBlock from './components/HeadInfoBlock/HeadInfoBlock';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import YourOrders from './components/Main/YourOrders/YourOrders';
import AboutBook from './components/Main/AboutBook/AboutBook';
// import Loader from './Loader';

const AppContainer = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HeadInfoBlock} />
          <Route exact path="/signup/:id" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/main/allBooks" component={Main} />
          <Route exact path="/main/yourOrders" component={YourOrders} />
          <Route exact path="/:id" component={AboutBook} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default AppContainer;
