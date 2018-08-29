// es6 syntax, when importing react save component property to Component variable
import React, { Component } from 'react';


// define SearchBar class and give it all the functionality that React Component has
// input elements have change events when a user types into them, to use the event you write "on""typeofevent"={this.nameofeventhandler}
// create a new input elemment, pass it a prop onChange with a value of this.onInputChange
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
