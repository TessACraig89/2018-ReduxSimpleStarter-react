// es6 syntax, when importing react save component property to Component variable
import React, { Component } from 'react';


// define SearchBar class and give it all the functionality that React Component has
// create a new input elemment, pass it a prop onChange with a value of this.onInputChange
// input handler is passed to onChange, it automatically runs when the input is changed.
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: 'starting'};
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
