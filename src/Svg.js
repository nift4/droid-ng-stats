import React from "react";
import "./css/main.css";

function Svg() {
  return (
    <div className="svg">
      <svg
        width="570"
        height="512"
        viewBox="0 0 570 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 6">
          <g id="bar1">
            <path
              id="Rectangle 1"
              d="M171 140C171 134.477 175.477 130 181 130H208C213.523 130 218 134.477 218 140V395H171V140Z"
              fill="#FB8C4E"
            />
          </g>
          <g id="bar2">
            <path
              id="Rectangle 2"
              d="M243 249C243 243.477 247.477 239 253 239H280C285.523 239 290 243.477 290 249V395H243V249Z"
              fill="#E2FF2F"
            />
          </g>
          <g id="bar3">
            <path
              id="Rectangle 3"
              d="M315 158C315 152.477 319.477 148 325 148H352C357.523 148 362 152.477 362 158V395H315V158Z"
              fill="#FF6262"
            />
          </g>
          <g id="bar4">
            <path
              id="Rectangle 4"
              d="M387 67C387 61.4771 391.477 57 397 57H424C429.523 57 434 61.4772 434 67V395H387V67Z"
              fill="#4AFFBE"
            />
          </g>
          <path id="Vector 1" d="M134 0V512" stroke="white" stroke-width="2" />
          <path
            id="Vector 2"
            d="M570 395L-5.126e-06 395"
            stroke="url(#paint0_linear_5_104)"
            stroke-width="2"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_5_104"
            x1="570"
            y1="395.5"
            x2="-4.37115e-08"
            y2="395.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.25" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Svg;
