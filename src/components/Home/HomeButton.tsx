import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  text: string,
  url: string,
};

function HomeButton({ text, url }: Props) {
  return (
    <li>
      <Link
        className="b--light-blue ba bg-animate black br3 f4 hover-bg-light-blue link pa3"
        to={url}
      >
        {text}
      </Link>
    </li>
  );
}

export default HomeButton;
