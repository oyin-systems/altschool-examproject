import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="error">404</h1>
      <h3 className="oops">OOPS! YOU SEEM TO BE LOST.</h3>
      <p className="sorry">Sorry, the page you're looking for doesn't exist.</p>
      <p className="return">Click on the link below to return home</p>
      <div>
        <button className="goback_button">
          <Link to="/" className="link">
            Counter App
          </Link>
        </button>
      </div>
    </div>
  );
}
