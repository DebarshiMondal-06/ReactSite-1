import React, { useState } from "react";
import GetData from "./GetData";
// import Svg1 from "./Svg1";
import axios from 'axios';


const Common = (props) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const on_click = () => {
    setLoading(true);
    const url = 'https://nwbpldvhy5.execute-api.ap-south-1.amazonaws.com/dev';
    axios.get(url).then((el) => {
      setTimeout(() => {
        setLoading(false);
      }, 500)
      setMessage(el.data)
    });
  }




  return (
    <section id="header">
      <div className="conatiner-fluid">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="firsttag col-md-6 p-5">
              <h1> This is <strong className="brand-name">My-Website</strong></h1>
              <h2 className="my-3">
                {props.name}
              </h2>
              <div className="mt-4">
                <button onClick={() => on_click()}
                  className="btn btn-get-started"> {props.btname} </button>
              </div>
            </div>
            <div style={{ width: 600 }} className="p-5 text-center header-img">
              <GetData message={message} load={loading} />
              {/* <Svg1 /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Common;