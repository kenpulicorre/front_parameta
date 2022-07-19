import React, { Fragment } from "react";
//hoooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
//acciones
import { restartDetalle } from "../actions/index.js";
import getClientes from "../actions/index.js";
//componentes
import Card from "./Card";
import Loader from "./Loader";
import Votar from "./Votar";
import VotarCorre from "./VotarCorre";
import Bd from "./Bd";

//-----------------------------------------
var señal;
export default function Home(params) {
  //----hook iniciales---------
  const dispatch = useDispatch(); //mapdispatchtoprops

  const [order, setOrder] = useState("");
  const [signal, setSignal] = useState(true);
  const [cardPag, setCardPag] = useState();

  //------------------cartastopage-----
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePage, setPokePage] = useState(12);
  const [arrayimg, setArrayimg] = useState([]);
  const [like, setLike] = useState(0);
  const [deslike, setDeslike] = useState(0);
  const [plike, setPLike] = useState(0);
  const [card, setcard] = useState();

  const endPoke = currentPage * pokePage;
  const iniPoke = endPoke - pokePage;

  //  setcard(allClientes);//lo hice en el usefect

  const setPaginado = (nPage) => {
    setCurrentPage(nPage);
  };

  //------------------fin cartasToPage-----
  const allClientes = useSelector((state) => state.todosClientes); //mapstatetoprops

  console.log("******************allclientes", allClientes);
  console.log("******************card", card);

  useEffect(() => {
    dispatch(getClientes());

    setcard(allClientes);
  }, []);
  console.log("******************allclientes2", allClientes);
  let cardsToPage = allClientes;
  console.log("******************cardsToPage", cardsToPage);

  useEffect(() => {
    setSignal(true);
    dispatch(getClientes());
    dispatch(restartDetalle());
    señal = true;
    //console.log("+++++++++++++++++las cartas son+++++++++++", card);
  }, [dispatch]); //[] =1sola vez,[state]=cada state ejecuta
  console.log("******************allclientes3", allClientes);
  console.log("******************cardsToPage2", cardsToPage);

  useEffect(() => {
    console.log("----en usefect card:", card);
  }, [card]); //[] =1sola vez,[state]=cada state ejecuta
  //----fin hook iniciales---------
  //----funciones-----------------

  //----fin funciones--------------
  let datosN = Bd();

  if (allClientes.length < 1 && signal) {
    // console.log("-------------------ni un poketcito");
    if (cardsToPage.length <= 0) {
      // console.log("no hay cartas-------------");
      cardsToPage = datosN;
    } else {
      // console.log("si hay cartas-------------");
      cardsToPage = allClientes;
    }

    setTimeout(() => {
      setcard(cardsToPage);
      setSignal(false);
    }, 1000);
    return <Loader />;
  } else {
    // console.log("si hay cartas-------------");

    if (allClientes.length < 1) {
      cardsToPage = datosN;
      setTimeout(() => {
        setcard(cardsToPage);
        //     setSignal(false);
      }, 1000);
    } else {
      if (allClientes.length >= 1) {
        cardsToPage = allClientes;
        setTimeout(() => {
          setcard(cardsToPage);
          setSignal(false);
        }, 1000);
      }
    }
  }

  return (
    <div>
      <div class="container">
        <div className={`row ${estilos.stylo3}`}>
          <div className={`col-sm-10${estilos.stylo3}`}>
            <div className={`col-sm-10${estilos.stylo3b}`}>
              <Votar />
            </div>
          </div>

          {/* <div>
            <VotarCorre done={Math.floor(plike, -1)} />
          </div> */}
        </div>

        <div className={`row ${estilos.stylo2}`}>
          {/* <CreateForm /> */}
          {/* llamando al componente card----- */}
          <div className={estilos.contenedor_pokes}>
            {card?.map((el) => {
              let heroImage = `${el.nombre}`;
              return (
                <Fragment key={el.idmovie}>
                  <Link
                    to={"/home/" + el.idmovie}
                    className={estilos.contenedor_1pke}
                  >
                    <Card
                      key={el.idmovie}
                      id={el.idmovie}
                      name={el.nombre}
                      superhero={el.superhero}
                      publisher={el.publisher}
                      first_appearance={el.first_appearance}
                      characters={el.characters}
                      img={heroImage}
                      votos={el.votos}
                      votosN={el.votosN}
                    />
                  </Link>
                </Fragment>
              );
            })}
          </div>
          {/* llamando al componente card----- */}
        </div>
      </div>
    </div>
  );
}
