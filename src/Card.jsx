import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 mx-auto">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-ripple-color="light">
            <img src={props.imgsrc} style={{ height: "250px" }} className="card-img-top" alt="no" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <NavLink to="#!" className="btn btn-primary">Button</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;