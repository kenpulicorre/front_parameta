import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetallecard, getDetallecardglobal } from "../actions/index.js";
import estilos from "./DetailPoke.module.css";
import imagex from "./images";
import Bd from "./Bd";

export default function DetailPoke(props) {
  // console.log(props);
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("paramken1 -------", id);
  const [card, setcard] = useState("hola");
  const [signal, setSignal] = useState(true);

  useEffect(() => {
    setSignal(true);
    dispatch(getDetallecard(id));
    dispatch(getDetallecardglobal(id));
    // console.log("kkk las cartas son+++++++++++", card);
  }, [id, dispatch]);
  //-----------1
  useEffect(() => {
    // console.log("--------------idini", id);
    setcard(clienteDetalle);
  }, []);
  //----------1

  const clienteDetalle = useSelector((state) => state.detalle);
  let cardsToPage = clienteDetalle;
  let x = [];
  //---------------2

  useEffect(() => {
    // console.log("+++++++++++++++++las cartas son+++++++++++", card);
    console.log(card);
  }, [card]); //[] =1sola vez,[state]=cada state

  let datosN = Bd();

  if (clienteDetalle?.length < 1 && signal) {
    // console.log("-------------------ni un poketcito");
    if (cardsToPage.length <= 0) {
      console.log("no hay cartas-------------");
      cardsToPage = datosN[id - 1];
    } else {
      console.log("si hay cartas-------------");
      cardsToPage = clienteDetalle;
    }

    setTimeout(() => {
      setSignal(false);
      dispatch(getDetallecard(id));
      dispatch(getDetallecardglobal(id));
      setcard(cardsToPage);
    }, 1000);
  } else {
    if (clienteDetalle?.length < 1) {
      if (cardsToPage.length <= 0) {
        console.log("no hay cartas-------------");
        cardsToPage = datosN[id - 1];
      } else {
        console.log("si hay cartas-------------");
        cardsToPage = clienteDetalle;
      }

      setTimeout(() => {
        // dispatch(getDetallecardglobal(id));
        setcard(cardsToPage);
      }, 1);
    } else {
      cardsToPage = clienteDetalle;
      setTimeout(() => {
        // dispatch(getDetallecardglobal(id));
        setcard(cardsToPage);
      }, 100);
    }
  }

  //-----------------2
  let indice = imagex;
  let nombre = card?.nombre;
  let posicion = indice.findIndex((e) => e.nom === nombre);
  console.log("----------en detalle posicin", posicion);
  return (
    <div class="container-sm">
      <hr className={estilos.container0}></hr>
      <div>
        <Link to="/home">
          <button className={estilos.boton}>VOLVER</button>
        </Link>
        {card?.idmovie > 0 ? (
          <div className={estilos.container}>
            <h1>hola</h1>
            <h1 className={estilos.name}>{card.nombre}</h1>

            <img src={imagex[posicion].valor} alt={card.name} />

            <div className={estilos.infoContainer}>
              <h3>Id: {card.idmovie}</h3>
              <h3>nombre: {card.nombre}</h3>
              <h3>Super Heroe: {card.superhero}</h3>
              <h3>Actores: {card.characters}</h3>

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
