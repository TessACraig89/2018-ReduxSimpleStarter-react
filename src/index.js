import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBcSh-Bl_3gphRm5mbkYM7gXTr081UK8k4';

YTSearch({key: API_KEY, term: 'cats'}, function(data) {
    console.log(data);
});

class App extends Component{
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
