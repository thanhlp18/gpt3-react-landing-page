import React from 'react';
import './possibility.css';

import possibillityImage from '../../assets/possibility.png';

const Possibillity = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibillity">
      <div className="gpt3__possibility-image">
        <img src={possibillityImage} alt="possibillity" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibillity