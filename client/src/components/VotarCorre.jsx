import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetallecard } from "../actions/index.js";
import estilos from "./VotarCorrer.module.css";
import imagex from "./images";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

export default function VotarCorre({ done }) {
  console.log({ done });
  const dispatch = useDispatch();
  const { id } = useParams(); //foma 2 con el hook useparams

  useEffect(() => {
    dispatch(getDetallecard(id)); //foma 2 con el hook useparams
  }, [id, dispatch]);

  // const [style, setStyle] = React.useState({});

  // console.log("lo que le llega al done es:++++++++++", done);
  // setTimeout(() => {
  //   const newStyle = {
  //     background: "red",
  //     width: `${done}%`,
  //   };

  //   setStyle(newStyle);
  // }, 1);

  return (
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
}
