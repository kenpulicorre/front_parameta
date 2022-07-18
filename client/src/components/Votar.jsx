import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetalleCliente } from "../actions/index.js";
import estilos from "./Votar.module.css";
import imagex from "./images";
import VotarCorre from "./VotarCorre";
export default function Votar(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [like, setLike] = useState(0);
  const [deslike, setDeslike] = useState(0);
  const [plike, setPLike] = useState(0);
  const [pDlike, setPDeslike] = useState(0);

  useEffect(() => {
    dispatch(getDetalleCliente(id));

    let total = like + deslike;
    let porcentaje_like = (like / total) * 100;
    let porcentaje_Deslike = (deslike / total) * 100;
    setPLike(porcentaje_like);
    setPDeslike(porcentaje_Deslike);
    // console.log(
    //   "------------los porcentajes son:*****************de like****",
    //   porcentaje_like,
    //   "porcentaje deslike~~~~~~~:",
    //   porcentaje_Deslike
    // );
  }, [id, dispatch, like, deslike]);
  function handleBotolike() {
    let num = like + 1;
    //setOrder(`actualiza estado local`);
    alert("Has dado un like a este super Heroe!");
    alert("Has dado un deslike a este super Heroe!");
    setLike(num);
    console.group("----------like es++++++++++++++++++++++++", like);
  }
  function handleBotoDeslike() {
    let num = deslike + 1;
    //setOrder(`actualiza estado local`);
    setDeslike(num);
    console.group("----------deslike  es++++++++++++++++++++++++", deslike);
  }
  const clienteDetalle = useSelector((state) => state.detalle);
  let indice = imagex;
  let nombre = clienteDetalle.nombre;
  let posicion = indice.findIndex((e) => e.nom === nombre);
  return (
    <div>
      <h1 className={estilos.container0}></h1>
      <div>
        {clienteDetalle.idmovie > 0 ? (
          <div className={estilos.container}>
            <h1 className={estilos.name}>{clienteDetalle.nombre}</h1>
            <img
              className={estilos.img}
              src={imagex[posicion].valor}
              alt={clienteDetalle.name}
            />
            <div className={estilos.infoContainer}>
              <h3>Id: {clienteDetalle.idmovie}</h3>
              <h3>nombre: {clienteDetalle.nombre}</h3>
              <p></p>
            </div>
          </div>
        ) : (
          <h1 className={estilos.estilo_l}>Seleccione su heroe...</h1>
        )}
        <hr></hr>

        {clienteDetalle.idmovie ? (
          <div>
            <button
              onClick={(e) => handleBotolike()}
              className={`btn btn-primary  ${estilos.stylo5}`}
            >
              Like
            </button>

            <button
              onClick={(e) => handleBotoDeslike()}
              className={`btn btn-primary  ${estilos.stylo5}`}
            >
              deslike
            </button>
            <h1>Porcentaje like{Math.floor(plike, -1)}</h1>
            <h1>Porcentaje Deslike{Math.floor(pDlike, -1)}</h1>
          </div>
        ) : (
          <div> vamos...</div>
        )}

        <hr></hr>
        <div>
          <VotarCorre done={Math.floor(plike, -1)} />
        </div>
        <p></p>
      </div>
    </div>
  );
}
