import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetalleCliente, updateCard } from "../actions/index.js";
import estilos from "./Votar.module.css";
import imagex from "./images";
import VotarCorre from "./VotarCorre";
export default function Votar(props) {
  console.log(props);
  const dispatch = useDispatch();
  const clienteDetalle = useSelector((state) => state.detalle);

  const { id } = useParams();
  const [like, setLike] = useState(0);
  const [deslike, setDeslike] = useState(0);
  const [plike, setPLike] = useState(0);
  const [pDlike, setPDeslike] = useState(0);
  const [card, setCard] = useState({
    idmovie: "",
    nombre: "",
    voto: 0,
    votoN: 0,
  });
  useEffect(() => {
    setLike(clienteDetalle.votos);
    setDeslike(clienteDetalle.votosN);
  }, []);

  useEffect(() => {
    dispatch(getDetalleCliente(id));

    let total = like + deslike;
    let porcentaje_like = (like / total) * 100;
    let porcentaje_Deslike = (deslike / total) * 100;
    setPLike(porcentaje_like);
    setPDeslike(porcentaje_Deslike);
    dispatch(updateCard(card));
    // console.log(
    //   "------------los porcentajes son:*****************de like****",
    //   porcentaje_like,
    //   "porcentaje deslike~~~~~~~:",
    //   porcentaje_Deslike
    // );
  }, [id, dispatch, like, deslike, card]);

  function handleBotolike() {
    let num = like + 1;
    setLike(num);
    setCard({
      idmovie: clienteDetalle.idmovie,
      nombre: clienteDetalle.nombre,
      superhero: clienteDetalle.superhero,
      publisher: clienteDetalle.publisher,
      alter_ego: clienteDetalle.alter_ego,
      first_appearance: clienteDetalle.first_appearance,
      characters: clienteDetalle.characters,
      voto: 1,
      votoN: 0,
    });
  }
  function handleBotoDeslike() {
    let num = deslike + 1;
    setDeslike(num);
    setCard({
      idmovie: clienteDetalle.idmovie,
      nombre: clienteDetalle.nombre,
      superhero: clienteDetalle.superhero,
      publisher: clienteDetalle.publisher,
      alter_ego: clienteDetalle.alter_ego,
      first_appearance: clienteDetalle.first_appearance,
      characters: clienteDetalle.characters,
      voto: 0,
      votoN: 1,
    });
  }
  function handleBotonSafe() {
    console.log("hola");
  }

  let indice = imagex;
  let nombre = clienteDetalle.nombre;
  let posicion = indice.findIndex((e) => e.nom === nombre);

  return (
    <div>
      <h1 className={estilos.container0}></h1>
      <div>
        {clienteDetalle.idmovie > 0 ? (
          <div className={estilos.infoContainer}>
            <div className={estilos.stylo6}>
              <h1 className={estilos.name}>
                {" "}
                Superheroe:{clienteDetalle.superhero}
              </h1>
              <hr></hr>

              <h3>nombre: {clienteDetalle.nombre}</h3>
              <h3>Likes: {clienteDetalle.votos}</h3>
              <h3>Deslikes: {clienteDetalle.votoN}</h3>

              <p></p>
            </div>

            <img
              className={estilos.img}
              src={imagex[posicion].valor}
              alt={clienteDetalle.name}
            />
            <div className={estilos.stylo6}>
              <h3>Id: {clienteDetalle.idmovie}</h3>
              <h3>NOMBRE: {clienteDetalle.nombre}</h3>
              <p></p>
            </div>

            {/* //-------------------- */}
            {clienteDetalle.idmovie ? (
              <div>
                <button
                  onClick={(e) => handleBotolike()}
                  className={`btn btn-primary  ${estilos.stylo5}`}
                >
                  Like
                </button>
                <div>
                  <button
                    onClick={(e) => handleBotoDeslike()}
                    className={`btn btn-primary  ${estilos.stylo5}`}
                  >
                    deslike
                  </button>

                  {!Math.floor(plike, -1) ? (
                    <h1>%DisLike: {0}</h1>
                  ) : (
                    <h3>%DisLike: {Math.floor(pDlike, -1)}</h3>
                  )}
                </div>

                {!Math.floor(plike, -1) ? (
                  <h1>%Like: {0}</h1>
                ) : (
                  <h1>%Like: {Math.floor(plike, -1)}</h1>
                )}
              </div>
            ) : (
              <div> vamos...</div>
            )}
            {/* //-------------- */}
            <div>
              <VotarCorre done={Math.floor(plike, -1)} />
            </div>

            {/* //-------------- */}
          </div>
        ) : (
          <h1 className={estilos.estilo_l}>Seleccione su heroe...</h1>
        )}
        <button
          onClick={(e) => handleBotonSafe()}
          className={`btn btn-primary  ${estilos.stylo5}`}
        >
          guarde en db
        </button>
        <hr></hr>
      </div>
    </div>
  );
}
