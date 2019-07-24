import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/Movie/${movie.id}`} key={movie.id}>
        <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <NavLink to="/" activeStyle={{ color: "yellow" }}>
      <div>Home</div>
    </NavLink>
  </div>
);

export default SavedList;
