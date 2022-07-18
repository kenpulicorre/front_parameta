import React, { Fragment } from "react";
//hoooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
//acciones
import {
  orderByName,
  getTypes,
  restartDetalle,
  postAgente,
} from "../actions/index.js";
import getClientes from "../actions/index";
//componentes
import Card from "./Card";
import agente from "./Agente";
import Loader from "./Loader";
import Votar from "./Votar";
import VotarCorre from "./VotarCorre";

//-----------------------------------------
var señal;
export default function Home(params) {
  //----hook iniciales---------
  const dispatch = useDispatch(); //mapdispatchtoprops
  const allClientes = useSelector((state) => state.todosClientes); //mapstatetoprops
  const [order, setOrder] = useState("");
  const [signal, setSignal] = useState(true);
  //------------------cartastopage-----
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePage, setPokePage] = useState(12);
  const [arrayimg, setArrayimg] = useState([]);
  const [like, setLike] = useState(0);
  const [deslike, setDeslike] = useState(0);
  const [plike, setPLike] = useState(0);
  const [pDlike, setPDeslike] = useState(0);

  const endPoke = currentPage * pokePage;
  const iniPoke = endPoke - pokePage;

  const cardsToPage = allClientes;
  const setPaginado = (nPage) => {
    setCurrentPage(nPage);
  };

  //------------------fin cartasToPage-----

  useEffect(() => {
    setSignal(true);
    dispatch(getClientes());

    // dispatch(getTypes());
    dispatch(restartDetalle());
    señal = true;

    // setTimeout(function () {
    //   setSignal(false);
    //   if (allClientes.length < 1) {
    //     console.log("si Aun no hay clientes, debe crearlos!");
    //   }
    // }, 10);
    // console.log("señallllllllllllllllllllllllllll\n", señal);
    // let total = like + deslike;
    // let porcentaje_like = (like / total) * 100;
    // let porcentaje_Deslike = (deslike / total) * 100;
    // setPLike(porcentaje_like);
    // setPDeslike(porcentaje_Deslike);
    // console.log(
    //   "------------los porcentajes son:*****************de like****",
    //   porcentaje_like,
    //   "porcentaje deslike~~~~~~~:",
    //   porcentaje_Deslike
    // );
  }, [dispatch]); //[] =1sola vez,[state]=cada state ejecuta

  //----fin hook iniciales---------
  //----funciones-----------------

  //----fin funciones--------------

  if (allClientes.length < 1 && signal) {
    return <Loader />;
  }

  return (
    <div>
      <div class="container">
        <div className={`row ${estilos.stylo3}`}>
          <div class="col-sm-12">
            <Votar />
          </div>

          {/* <div>
            <VotarCorre done={Math.floor(plike, -1)} />
          </div> */}
          <div class="col-sm-4">One of three columns</div>
        </div>

        <div className={`row ${estilos.stylo2}`}>
          {/* <CreateForm /> */}
          {/* llamando al componente card----- */}
          <div className={estilos.contenedor_pokes}>
            {cardsToPage?.map((el) => {
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

    //-------------------------bootstrap-----------------------
    // <div className={estilos.contenedor}>
    //   <h1 className={estilos.title}>¡Creacion de Formato!</h1>
    //   <div className={estilos.selector}>
    //     <p className={estilos.selector2}>
    //       <Link to="/cliente" className={estilos.crear_poke}>
    //         Crea cliente
    //       </Link>
    //     </p>
    //     {/* lalmado componente search */}
    //   </div>

    //   {/* filtros------------------------- */}
    //   <div className={estilos.Contenedor_filtro}>
    //     {/* ascendentemente como descendentemente */}
    //     <select
    //       name=""
    //       id=""
    //       onChange={(e) => handleOrder(e)}
    //       className={estilos.select}
    //     >
    //       <option value="Asc">Ascendente</option>
    //       <option value="Desc">Descenden</option>
    //     </select>

    //     {/* llamando al componente Paginado */}

    //     {/* <CreateForm /> */}
    //     {/* llamando al componente card----- */}
    //     <div className={estilos.contenedor_pokes}>
    //       {cardsToPage?.map((el) => {
    //         console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", el);
    //         let heroImage = `${el.nombre}`;
    //         console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~heroImage~", heroImage);

    //         return (
    //           <Fragment key={el.idmovie}>
    //             <Link
    //               to={"/home/" + el.idmovie}
    //               className={estilos.contenedor_1pke}
    //             >
    //               <Card
    //                 key={el.idmovie}
    //                 id={el.idmovie}
    //                 name={el.nombre}
    //                 superhero={el.superhero}
    //                 publisher={el.publisher}
    //                 first_appearance={el.first_appearance}
    //                 characters={el.characters}
    //                 img={heroImage}
    //               />
    //             </Link>
    //           </Fragment>
    //         );
    //       })}
    //     </div>
    //     {/* llamando al componente card----- */}
    //   </div>

    //   <div class="container">
    //     <div class="row align-items-start">
    //       <div class="col">One of three columns</div>
    //       <div class="col">One of three columns</div>
    //       <div class="col">One of three columns</div>
    //     </div>
    //     <div class="row align-items-center">
    //       <div class="col">One of three columns</div>
    //       <div class="col">One of three columns</div>
    //       <div class="col">One of three columns</div>
    //     </div>
    //     <div class="row align-items-end">
    //       <div class="col">One of three columns</div>
    //       <div class="col">One of three columns</div>
    //       <div class="col">One of three columns</div>
    //     </div>
    //   </div>
    // </div>
  );
}
