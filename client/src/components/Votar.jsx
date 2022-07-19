import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetallecard, updateCard } from "../actions/index.js";
import estilos from "./Votar.module.css";
import imagex from "./images";
import VotarCorre from "./VotarCorre";
import Bd from "./Bd";
export default function Votar(props) {
  console.log(props);
  const dispatch = useDispatch();
  const clienteDetalleid = useSelector((state) => state.detalleg);
  console.log("111111111111111111111111111detalleid", clienteDetalleid);
  let datosN = Bd();

  console.log("222222222222222222222222datosN", datosN);

  const [cardid, setcardid] = useState();

  const { id } = useParams();
  const [like, setLike] = useState(0);
  const [deslike, setDeslike] = useState(0);
  const [like2, setLike2] = useState(0);
  const [deslike2, setDeslike2] = useState(0);

  const [plike, setPLike] = useState(0);
  const [plike2, setPLike2] = useState(0);

  const [pDlike, setPDeslike] = useState(0);
  const [pDlike2, setPDeslike2] = useState(0);
  const [res, setres] = useState("");
  const [card, setCard] = useState({
    idmovie: "",
    nombre: "",
    voto: 0,
    votoN: 0,
  });
  useEffect(() => {
    setcardid(clienteDetalle);
    setLike(clienteDetalle?.votos);
    setDeslike(clienteDetalle?.votosN);
  }, []);
  const clienteDetalle = useSelector((state) => state.detalle);

  //---------------
  if (clienteDetalle?.length < 1) {
    let cardsToPage = datosN[clienteDetalleid - 1];
    console.log(" 333333333333cardsToPage", cardsToPage);
    setTimeout(() => {
      setcardid(cardsToPage);
    }, 100);
  } else {
    console.log("4444444444cardsToPage");
    setTimeout(() => {
      setcardid(clienteDetalle);
    }, 100);
  }
  useEffect(() => {
    console.log("55555555555cardid", cardid);
  }, [cardid]);
  //----------------

  useEffect(() => {
    dispatch(getDetallecard(id));
    let total2 = like2 + deslike2;
    setPLike2((like2 / total2) * 100);
    setPDeslike((deslike2 / total2) * 100);

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
  }, [id, dispatch, res, like, deslike, card]);

  function handleBotolike() {
    let num2 = like2 + 1;
    setLike2(num2);
    // alert(like2);

    let num = like + 1;
    setLike(num);
    setCard({
      idmovie: cardid.idmovie,
      nombre: cardid.nombre,
      superhero: cardid.superhero,
      publisher: cardid.publisher,
      alter_ego: cardid.alter_ego,
      first_appearance: cardid.first_appearance,
      characters: cardid.characters,
      voto: 1,
      votoN: 0,
    });
  }
  function handleBotoDeslike() {
    let num2 = deslike2 + 1;
    setDeslike2(num2);
    // alert(deslike2);

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
    dispatch(updateCard(card));
    setres("modifico en db");
    alert("se guardo correctamente,  escoja otro personaje");
  }

  let indice = imagex;
  let nombre = cardid?.nombre;
  let posicion = indice.findIndex((e) => e.nom === nombre);
  console.log("66666666666666666cardid", cardid);
  console.log("7777777777777777clienteDetalle", cardid);

  return (
    <div>
      <h1 className={estilos.container0}></h1>
      <div>
        {cardid?.idmovie > 0 ? (
          //-----comenta
          <div className={estilos.infoContainer}>
            <div className={estilos.stylo6}>
              <h1 className={estilos.name}> Superheroe:{cardid?.superhero}</h1>
              <hr></hr>
              <p></p>
            </div>

            <img
              className={estilos.img}
              src={imagex[posicion].valor}
              alt={cardid.name}
            />
            <div className={estilos.stylo6}>
              <h3>Id: {cardid.idmovie}</h3>
              <h3>NOMBRE: {cardid.nombre}</h3>
              <p></p>
            </div>

            {/* //-------------------- */}
            {cardid.idmovie ? (
              <div>
                <button
                  onClick={(e) => handleBotolike()}
                  className={`btn btn-primary background: #c42b2b ${estilos.stylo5}`}
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
                </div>
              </div>
            ) : (
              //---------------

              <div> vamos...</div>
            )}
            {/* //-------------- */}
            <div>
              {clienteDetalle?.length < 1 ? (
                <VotarCorre done={Math.floor(plike2, -1)} />
              ) : (
                <VotarCorre done={Math.floor(plike, -1)} />
              )}
              {clienteDetalle?.length < 1 ? (
                <div>
                  {!Math.floor(plike2, -1) ? (
                    <h3>%Like: {0}</h3>
                  ) : (
                    <h3>%Like: {Math.floor(plike2, -1)}</h3>
                  )}
                  {!Math.floor(plike2, -1) ? (
                    <h3>%DLike: {0}</h3>
                  ) : (
                    <h3>%DLike: {Math.floor(100 - plike2, -1)}</h3>
                  )}
                </div>
              ) : (
                <div>
                  {!Math.floor(plike, -1) ? (
                    <h3>%Like: {0}</h3>
                  ) : (
                    <h3>%Like: {Math.floor(plike, -1)}</h3>
                  )}
                  {!Math.floor(plike, -1) ? (
                    <h3>%DisLike: {0}</h3>
                  ) : (
                    <h3>%DisLike: {Math.floor(pDlike, -1)}</h3>
                  )}
                </div>
              )}
            </div>

            {/* //-------------- */}
            <button
              onClick={(e) => handleBotonSafe()}
              className={`btn btn-primary  ${estilos.stylo5}`}
            >
              guarde en db
            </button>
          </div>
        ) : (
          //-----fin comenta
          <h1 className={estilos.estilo_l}>Seleccione su heroe...</h1>
        )}

        <hr></hr>
      </div>
    </div>
  );
}
