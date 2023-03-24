import React from 'react';

import CardList from '../components/Cards/CardList';
import Form from '../components/Form/Form';

class FormPage extends React.Component {
  render() {
    return (
      <>
        <h1>Submit a New Card</h1>
        <Form />
        <CardList books={[]} />
      </>
    );
  }
}

export default FormPage;
