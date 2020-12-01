import React, { Component } from "react";

export default class SearchBar extends Component {

  
  render() {
    return (
      <div className="Searchbar">
        <div>
          <h3>Search</h3>
          <input type="text" onChange={this.props.searchInput}></input>
        </div>
      </div>
    );
  }
}
