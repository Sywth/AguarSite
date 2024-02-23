import React from "react";
type LogoProps = React.SVGProps<SVGSVGElement>;

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="none"
      {...props}
    >
      <circle cx="50" cy="55" r="50" fill="#FBFADA" />
      <circle cx="55" cy="50" r="50" fill="#12372A" />
      <path
        d="M55.2433 15.1404L89.7015 67.2928L20.4198 67.0496L55.2433 15.1404Z"
        fill="white"
      />
      <path
        d="M43.6441 32.347L66.8395 67.2797L20.204 67.1159L43.6441 32.347Z"
        fill="#12372A"
        fillOpacity="0.69"
      />
    </svg>
  );
};

export default Logo;
