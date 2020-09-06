import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  text: string,
  url: string,
};

function HomeButton({ text, url }: Props) {
  return (
    <li>
      <Link className="link" to={url}>{text}</Link>
    </li>
  );
}

export default HomeButton;
