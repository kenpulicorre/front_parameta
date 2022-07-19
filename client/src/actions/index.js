const axios = require("axios");
// import axios from "axios";
export const GET_CARDS = "getCards";
export const POST_CARD = "postCard";
export const UPDATE_CARD = "updateCard";
export const GET_DETAIL = "getDetallecard"; //BY iD PARAMS
export const GET_DETAILG = "getDetallecardglobal"; //BY iD PARAMS
export const ORDER_BY_FUERZA = "orderByFuerza";
export const DETALLE_RESTAURAR = "restartDetalle";

//--
//--
//--

//--
//--

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
//-
//-

export function getDetallecard(id) {
  console.log("----getDetallecard Ok!");
  return async function (dispatch) {
    try {
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
export function getDetallecardglobal(id) {
  console.log("----getDetallecardglobal Ok!");

  return {
    type: GET_DETAILG,
    payload: id,
  };
}
//--
//--
export function postCard(params) {
  console.log("----postCard Ok!");
  return async function (dispatch) {
    try {
      console.log("------parametros post", params);
      const json = await axios.post("http://localhost:8080/movie", params);
      console.log(json);
      //return json
      return dispatch({
        type: POST_CARD,
        payload: json,
      });
    } catch (error) {
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

export default function getCards() {
  console.log("----getCards Ok!");
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:8080/movie`, {});
      if (!json) {
        console.log("envie data creada");
      }

      return dispatch({
        type: GET_CARDS,
        payload: json.data,
      });
    } catch (error) {
      // alert("Falla en obtencion  desde base de datos");
      console.log(error);
    }
  };
}
