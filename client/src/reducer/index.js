import {
  GET_CLIENTES,
  ORDER_BY_NAME,
  GET_TYPES,
  GET_DETAIL,
  POST_CARD,
  POST_CIUDAD,
  POST_AGENTE,
} from "../actions/index.js";
const initialState = {
  todosClientes: [],
  pokemonSinFiltro: [],
  types: [],
  detalle: [],
  todosCiudades: [],
};
function rootReducer(state = initialState, action) {
  //---------
  switch (action.type) {
    case GET_CLIENTES:
      return {
        ...state,
        todosClientes: action.payload,
        pokemonSinFiltro: action.payload,
      };
    case ORDER_BY_NAME:
      console.log("-------orden k");
      let arrayOrdened =
        action.payload === "Asc"
          ? state.todosClientes.sort((a, b) => {
              if (a.nombre > b.nombre) {
                return 1;
              } else if (a.nombre < b.nombre) {
                return -1;
              } else return 0;
            })
          : state.todosClientes.sort((a, b) => {
              if (a.nombre > b.nombre) {
                return -1;
              } else if (a.nombre < b.nombre) {
                return 1;
              } else return 0;
            });
      console.log("arrayOrdened", arrayOrdened);
      return {
        ...state,
        todosClientes: arrayOrdened,
      };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case POST_CARD:
      return { ...state };
    case POST_CIUDAD:
      return { ...state };
    case POST_AGENTE:
      return { ...state };
    case GET_DETAIL:
      return {
        ...state,
        detalle: action.payload,
      };

    default:
      return state;
  }
  //---------
}
export default rootReducer;
