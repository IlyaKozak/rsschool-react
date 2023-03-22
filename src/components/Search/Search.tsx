import React from 'react';

import { searchValueKey } from '../../constants/constants';
import withStorage, { WithStorageProps } from '../../hoc/withStorage';
import './Search.css';

class Search extends React.Component<WithStorageProps> {
  state = {
    inputValue: this.props.getValue(),
  };

  updateInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  componentWillUnmount() {
    this.props.setValue(this.state.inputValue);
  }

  render() {
    return (
      <section className="search">
        <input
          type="search"
          placeholder="&#128269; Search here …"
          value={this.state.inputValue}
          onChange={this.updateInputValue.bind(this)}
        />
      </section>
    );
  }
}

export default withStorage(Search, localStorage, searchValueKey);
