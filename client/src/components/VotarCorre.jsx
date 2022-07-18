import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetalleCliente } from "../actions/index.js";
import estilos from "./DetailPoke.module.css";
import imagex from "./images";

export default function VotarCorre({ done }) {
  console.log({ done });
  const dispatch = useDispatch();
  const { id } = useParams(); //foma 2 con el hook useparams
  useEffect(() => {
    //dispatch(getDetalleCliente(props.match.params.id)); //forma 1 con match
    dispatch(getDetalleCliente(id)); //foma 2 con el hook useparams
  }, [id, dispatch]);
  // }, [id,dispatch]);///foma 2 con el hook useparams

  //-----
  const clienteDetalle = useSelector((state) => state.detalle);
  let x = [];
  //

  console.log(x);
  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeekenn", clienteDetalle);

  let indice = imagex;
  // el.nombre;
  let nombre = clienteDetalle.nombre;
  let posicion = indice.findIndex((e) => e.nom === nombre);
  console.log("----------en detalle posicin", posicion);

  // const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});
  console.log("lo que le llega al done es:++++++++++", done);
  setTimeout(() => {
    const newStyle = {
      background: "red",
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 100);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
  // };
  return <div>hola</div>;
}

// const App = () => (
//   <>
//     <h1>React Progress Bar</h1>
//     <Progress done="20" />
//   </>
// );

// ReactDOM.render(<App />, document.getElementById("app"));
