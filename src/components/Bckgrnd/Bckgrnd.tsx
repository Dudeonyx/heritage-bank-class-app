import React from 'react';

export function Bckgrnd() {
  return (
    <svg viewBox="0 0 375 445" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path
          d="M0 68.1589C0 68.1589 29 170.818 185.5 68.1589C342 -34.5 375 68.1589 375 68.1589V581H0V68.1589Z"
          fill="#4FC143"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-2"
          y="0.532745"
          width="379"
          height="580.467"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-20" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.309804 0 0 0 0 0.756863 0 0 0 0 0.262745 0 0 0 0.68 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
