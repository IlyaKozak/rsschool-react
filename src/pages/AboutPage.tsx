import React from 'react';
import { rsschoolTaskURL } from '../constants/constants';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <h1>About Us</h1>
        <p>Learning React in RsSchool</p>
        <a href={rsschoolTaskURL}>Task Requirements</a>
      </>
    );
  }
}

export default AboutPage;
