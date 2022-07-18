import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetalleCliente } from "../actions/index.js";
import estilos from "./DetailPoke.module.css";
import imagex from "./images";
export default function DetailPoke(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetalleCliente(id));
  }, [id, dispatch]);
  const clienteDetalle = useSelector((state) => state.detalle);
  let x = [];

  let indice = imagex;
  let nombre = clienteDetalle.nombre;
  let posicion = indice.findIndex((e) => e.nom === nombre);
  console.log("----------en detalle posicin", posicion);
  return (
    <div class="container-sm">
      <hr className={estilos.container0}></hr>
      <div>
        <Link to="/home">
          <button className={estilos.boton}>VOLVER</button>
        </Link>
        {clienteDetalle.idmovie > 0 ? (
          <div className={estilos.container}>
            <h1 className={estilos.name}>{clienteDetalle.nombre}</h1>

            <img src={imagex[posicion].valor} alt={clienteDetalle.name} />

            <div className={estilos.infoContainer}>
              <h3>Id: {clienteDetalle.idmovie}</h3>
              <h3>nombre: {clienteDetalle.nombre}</h3>
              <h3>Super Heroe: {clienteDetalle.superhero}</h3>
              <h3>Actores: {clienteDetalle.characters}</h3>

              <p></p>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
        <p></p>
        <Link to="/home">
          <button className={estilos.boton}>VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
