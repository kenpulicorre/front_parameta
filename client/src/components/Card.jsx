import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
// import image from "./assets/f1.jpg";

import imagex from "./images";
//acciones

export default function Card({
  id,
  name,
  cedula,
  celular,
  ciudad,
  agente,
  superhero,
  publisher,
  first_appearance,
  characters,
  img,
  votos,
  votosN,
}) {
  console.log("el type es ", name);

  // let x = [];
  // x = type.map((t) => (inDb ? t.name : t));
  // console.log("ahora el tipo es :---", x);
  let indice = imagex;
  let posicion = indice.findIndex((e) => e.nom === img);
  console.log("-----------------indice:-----", indice, "\n", posicion);
  return (
    <div>
      <img
        src={imagex[posicion].valor}
        alt="imagen de superheroe"
        width="200px"
        height="250px"
      />
      <p>Nombre: {name}</p>
      <p>superhero:{superhero}</p>
      <p>characters:{characters}</p>
      <p>Likes total:{votos}</p>
      <p>Dislike Total:{votosN}</p>
      <hr></hr>
    </div>
  );
}
