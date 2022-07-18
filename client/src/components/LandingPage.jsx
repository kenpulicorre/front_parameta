import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import estilos from "./LandingPage.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { postAgente } from "../actions/index.js";
import agente from "./Agente";

export default function LandingPage(params) {
  const dispatch = useDispatch(); //mapdispatchtoprops
  let datox = agente();

  useEffect(() => {
    for (let i = 0; i < datox.length; i++) {
      dispatch(postAgente(datox[i]));
    }
  }, [dispatch]);

  return (
    <div className={estilos.landing}>
      <h1 className={estilos.texto}> Formato</h1>
      <Link to="/home" className={estilos.button}>
        <p></p>
        <button>INGRESAR</button>
        <p></p>
      </Link>{" "}
      <p></p>
      <p></p>
      <p></p>
      <h6 className={estilos.fintexto}>Creado por @kenpulicorre</h6>
    </div>
  );
}
