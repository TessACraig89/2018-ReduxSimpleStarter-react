// es6 syntax, when importing react save component property to Component variable
import React, { Component } from 'react';


// define SearchBar class and give it all the functionality that React Component has
// create a new input elemment, pass it a prop onChange with a value of this.onInputChange
// input handler is passed to onChange, it automatically runs when the input is changed.
// state is a plain
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value})} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
