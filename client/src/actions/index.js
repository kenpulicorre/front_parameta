const axios = require("axios");
// import axios from "axios";
export const GET_CLIENTES = "getClientes";

export const ORDER_BY_NAME = "orderByName"; //ORDEN ALFABETICO
export const GET_NAME_POKEMONS = "getNamePokemons"; //QUERY
export const GET_TYPES = "getTypes";
export const POST_CARD = "postCard";
export const UPDATE_CARD = "updateCard";
export const POST_CIUDAD = "postCiudad";
export const GET_DETAIL = "getDetalleCliente"; //BY iD PARAMS
export const ORDER_BY_FUERZA = "orderByFuerza";
export const DETALLE_RESTAURAR = "restartDetalle";
export const GET_DELETE_NAME_POKEMONS = "getDeleteNamePokemons";
export const POST_AGENTE = "postAgente";

//--
//--
//--

//--
//--
export function orderByName(params) {
  console.log("----orderByName Ok!");
  return {
    type: ORDER_BY_NAME,
    payload: params,
  };
}
//--
//--
export function orderByFuerza(params) {
  console.log("----orderByFuerza Ok!");

  return {
    type: ORDER_BY_FUERZA,
    payload: params,
  };
}
//--
//--
export function restartDetalle(params) {
  console.log("----restartDetalle Ok!");

  return {
    type: DETALLE_RESTAURAR,
    payload: params,
  };
}
//--
//--

//--
export function getTypes(params) {
  console.log("----getTypes Ok!");
  return async function (dispatch) {
    try {
      // const json = await axios.get("http://localhost:4000/types");
      const json = await axios.get("http://127.0.0.1:8000/api/agentes/");
      return dispatch({
        type: GET_TYPES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//--
//--

export function getDetalleCliente(id) {
  console.log("----getDetalleCliente Ok!");
  return async function (dispatch) {
    try {
      //const json = await axios.get("http://localhost:4000/pokemons/" + id);
      const json = await axios.get("http://localhost:8080/movie/" + id);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function xx(params) {}
//--
//--
export function postCard(params) {
  console.log("----postCard Ok!");
  return async function (dispatch) {
    try {
      //const json = await axios.post("http://localhost:4000/pokemons", params);
      // const json = await axios.post(
      //   "http://127.0.0.1:8000/api/clientes?nombre=kenneth2&cedula=1107087956&celular=3136783042&dirección=viamar&ciudad=cali valle&agente_id=7"
      // );
      console.log("------parametros post", params);
      const json = await axios.post("http://localhost:8080/movie", params);
      console.log(json);
      //return json
      return dispatch({
        type: POST_CARD,
        payload: json,
      });
    } catch (error) {
      alert("no clientes");
      console.log(error);
    }
  };
}

export function updateCard(params) {
  console.log("----updateCard Ok!");
  return async function (dispatch) {
    try {
      console.log("------parametros post", params);
      const json = await axios.put("http://localhost:8080/movie", params);
      console.log(json);
      //return json
      return dispatch({
        type: UPDATE_CARD,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCiudad(params) {
  console.log("----postCiudadOk!");
  return async function (dispatch) {
    try {
      console.log("------parametros post ciudad,params", params);
      const json = await axios.post(
        "http://127.0.0.1:8000/api/ciudades",
        params
      );
      console.log(json);
      //return json
      return dispatch({
        type: POST_CIUDAD,
        payload: json,
      });
    } catch (error) {
      alert("no ciudades");
      console.log(error);
    }
  };
}
export function postAgente(params) {
  console.log("----postAgenteOk!");

  console.log("---------------el dispatch agente", params);
  return async function (dispatch) {
    try {
      console.log("------parametros post ciudad,params", params);
      const json = await axios.post("http://localhost:8080/movie", params);
      console.log(json);
      //return json
      return dispatch({
        type: POST_AGENTE,
        payload: json,
      });
    } catch (error) {
      console.log("no AGENTES");
      console.log(error);
    }
  };
}

export default function getClientes() {
  console.log("----getClientes Ok!");
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:8080/movie`, {});
      if (!json) {
        console.log("envie data creada");
      }

      return dispatch({
        type: GET_CLIENTES,
        payload: json.data,
      });
    } catch (error) {
      // alert("Falla en obtencion  desde base de datos");
      console.log(error);
    }
  };
}
