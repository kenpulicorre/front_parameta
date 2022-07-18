import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetalleCliente } from "../actions/index.js";
import estilos from "./VotarCorrer.module.css";
import imagex from "./images";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

export default function VotarCorre({ done }) {
  console.log({ done });
  const dispatch = useDispatch();
  const { id } = useParams(); //foma 2 con el hook useparams
  const [progressNow, setProgressNow] = useState(0);
  useEffect(() => {
    dispatch(getDetalleCliente(id)); //foma 2 con el hook useparams
  }, [id, dispatch]);

  const [style, setStyle] = React.useState({});

  console.log("lo que le llega al done es:++++++++++", done);
  setTimeout(() => {
    const newStyle = {
      background: "red",
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 1);

  return (
    // <div className="progress">
    //   <div className="progress-done" style={style}>
    //     {done}%
    //   </div>
    // </div>
    <div>
      <MDBProgress height="50">
        {/* <MDBProgressBar width={done} valuemin={0} valuemax={100} /> */}
        <MDBProgressBar
          striped
          animated
          bgColor="success"
          width={done}
          valuemin={0}
          valuemax={100}
        />
      </MDBProgress>
    </div>
  );
  // };
  return <div>hola</div>;
}
// const [progressNow, setProgressNow] = useState(0);

// const updateProgressNowHandler = setInterval(() => {
//   if (progressNow >= 70) {
//     setProgressNow(70);
//     clearInterval(updateProgressNowHandler);
//   }
//   setProgressNow((s) => s + 1);
// }, 50);

// return <ProgressBar animated now={progressNow} className="progress-bar" />;
