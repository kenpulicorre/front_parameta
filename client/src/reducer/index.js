import {
  GET_CARDS,
  GET_DETAIL,
  POST_CARD,
  UPDATE_CARD,
  GET_DETAILG,
} from "../actions/index.js";
const initialState = {
  todosClientes: [],
  pokemonSinFiltro: [],
  types: [],
  detalle: [],
  detalleg: [],
  todosCiudades: [],
};
function rootReducer(state = initialState, action) {
  //---------
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        todosClientes: action.payload,
        pokemonSinFiltro: action.payload,
      };

    case POST_CARD:
      return { ...state };
    case UPDATE_CARD:
      return { ...state };

    case GET_DETAIL:
      return {
        ...state,
        detalle: action.payload,
      };
    case GET_DETAILG:
      return {
        ...state,
        detalleg: action.payload,
      };
    default:
      return state;
  }
  //---------
}
export default rootReducer;
