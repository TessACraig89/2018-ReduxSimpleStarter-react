import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './compnents/search_bar';

const API_KEY = 'AIzaSyBcSh-Bl_3gphRm5mbkYM7gXTr081UK8k4';
// Create a new componenet. This component should produce
// some html
const App = () => {
  return <div>Hi!</div>;
}
// Take this componenets generatied HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
