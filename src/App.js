import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

          <NavBar />
          <div className="container">

          <Route exact path="/" component={UserList}>

          </Route>
          <Route path="/addUser" component={AddUser}>

          </Route>
          </div>
      </BrowserRouter>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
