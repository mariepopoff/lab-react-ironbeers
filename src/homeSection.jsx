import React from 'react';
import { Link } from 'react-router-dom';
import "./homeSection.css"

export default function homeSection(props) {
  return (
    <div id="home-section">
      <img src={props.picture} alt="photo-section" />
      <div>
      <Link exact to={'/' + props.route}>
        <p>{props.title}</p>
      </Link>
      <p id="text">{props.text}</p>
      </div>
    </div>
  );
}
