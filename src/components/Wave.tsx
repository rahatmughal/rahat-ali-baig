import React from 'react';

const Wave = () => (
  <svg
    id="wave"
    style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
    viewBox="0 0 1440 160"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stopColor="rgba(0, 0, 0, 1)" offset="0%" />
        <stop stopColor="rgba(0, 1, 1, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      style={{ transform: 'translate(0, 0px)', opacity: 1 }}
      fill="url(#sw-gradient-0)"
      d="M0,96L1440,64L2880,112L4320,96L5760,0L7200,128L8640,0L10080,112L11520,32L12960,96L14400,32L15840,96L17280,112L18720,48L20160,128L21600,16L23040,0L24480,112L25920,112L27360,16L28800,80L30240,144L31680,144L33120,16L34560,32L34560,160L33120,160L31680,160L30240,160L28800,160L27360,160L25920,160L24480,160L23040,160L21600,160L20160,160L18720,160L17280,160L15840,160L14400,160L12960,160L11520,160L10080,160L8640,160L7200,160L5760,160L4320,160L2880,160L1440,160L0,160Z"
    ></path>
  </svg>
);

export default Wave;
