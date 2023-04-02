import React from 'react';

import { rsschoolTaskURL } from '../constants/constants';

const AboutPage: React.FC = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>Learning React in RsSchool</p>
      <a href={rsschoolTaskURL}>Task Requirements</a>
    </>
  );
};

export default AboutPage;
