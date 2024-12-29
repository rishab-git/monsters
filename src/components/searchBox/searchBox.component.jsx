import { Component } from "react";
import './searchBox.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search"
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

export default SearchBox;
