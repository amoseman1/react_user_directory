import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBox from './components/Searchbox';
//import all components from those files
// import Cards from './components/Cards';
import UserContainer from './components/UserContainer'


function App() {
  function onSearchClick() {
    console.log('search')
  }

  return (
    <div>
      <SearchBox onClick={onSearchClick} />
      {/* <UserContainer /> */}
    </div>
  );
}

export default App;
