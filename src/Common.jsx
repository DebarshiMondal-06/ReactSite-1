import React from "react";
import { NavLink } from "react-router-dom";
import Svg1 from "./Svg1";

const Common = (props) => {
  return (
    <>
      <section id="header">
        <div className="conatiner-fluid">
          <div className="row mt-3">
            <div className="col-10 mx-auto">
              <div className="row mt-4">
                <div className="firsttag col-md-6 p-5">
                  <h1> This is <strong className="brand-name">My-React-Website</strong></h1>
                  <h2 className="my-3">
                    {props.name}
                  </h2>
                  <div className="mt-4">
                    <NavLink to={props.visit} className="btn-get-started"> {props.btname} </NavLink>
                  </div>
                </div>
                <div className="col-md-6 mb-4 text-center header-img">
                  <Svg1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;