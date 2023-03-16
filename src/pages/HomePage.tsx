import React from 'react';
import Card from '../components/Card';
import { books } from '../mock/books';

class HomePage extends React.Component {
  render() {
    const book = books[0];
    return (
      <>
        <Card {...book} />
      </>
    );
  }
}

export default HomePage;
