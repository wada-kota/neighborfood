import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Visual from './visual';
import Search from './Search';
import Footer from './Footer';

// import ApiFetch from './ApiFetch';

//ใในใ
// import Api from './api';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <Header />
        <Visual  />
        <Search />
        <Footer />
      </div>
    )
  }
}

export default App;
