import React from 'react';
import { searchInitialValue } from '../constants/constants';

class Search extends React.Component {
  state = {
    inputValue: localStorage.getItem(searchInitialValue) ?? '',
  };

  updateInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  componentWillUnmount() {
    localStorage.setItem(searchInitialValue, this.state.inputValue);
  }

  render() {
    return (
      <section className="search">
        <input
          type="search"
          placeholder="&#128269; Search here …"
          value={this.state.inputValue}
          onChange={(event) => this.updateInputValue(event)}
        />
      </section>
    );
  }
}

export default Search;
