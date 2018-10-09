import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBcSh-Bl_3gphRm5mbkYM7gXTr081UK8k4';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    // so user can immediately see data
    YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
        this.setState({ videos });
        // this.setState({ videos : videos})
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
