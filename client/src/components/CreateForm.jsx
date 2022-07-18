import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import estilos from "./CreateForm.module.css";
//acciones
import { postCard, postCiudad, getTypes } from "../actions/index.js";
import { getDetallePoke } from "../actions/index.js";
import getClientes from "../actions/index";
//componentes
import Card from "./Card";
import SearchBar from "./SearchBar";

//-----------------------------------------
export default function CreateForm(params) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const types = useSelector((state) => state.types);
  const allClientes = useSelector((state) => state.todosPokemons);

  //---
  useEffect(() => {
    dispatch(getTypes());
    console.log("entrada", input.name);
    dispatch(getClientes());
  }, []);

  //---
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    nombre: "",
    cedula: "",
    celular: "",
    dirección: "",
    ciudad: "",
    departamento: "",
    agente_id: "",

    types: [],
    // inDb: "",
  });
  const [input2, setInput2] = useState({
    nombre: "",
    cedula: "",
    celular: "",
    dirección: "",
    ciudad: "",
    agente_id: "",
  });
  const [input3, setInput3] = useState({
    nombre: "",
    departamento: "",
    cliente_id: "",
  });
  const [input3b, setInput3b] = useState({
    nombre: "",
    departamento: "",
    cliente_id: "",
  });

  useEffect(() => {
    setErrors(handleValidacion({ ...input, ["types"]: input.types }));
    let lagen = input.agente_id.length;
    console.log("eroooooooorrrrrr", input.nombre.toString());

    setInput2({
      nombre: input.nombre,
      cedula: input.cedula,
      celular: input.celular,
      dirección: input.dirección,
      ciudad: input.ciudad,
      agente_id: input.agente_id[lagen - 1],
    });
    // dispatch(getClientes());
    console.log("--------------dentrousefect-----input3", input3);
    //--------despacho ela funcion ciudad
    setInput3b({
      nombre: input3.ciudad,
      departamento: input3.departamento,
      cliente_id: input3.cliente_id,
    });

    //--------despacho funcion ciudad
  }, [input, dispatch, input3]);
  //-----logica-----
  //--------------handleOnChange
  function handleOnChange(e) {
    console.log("digito esto", e.target.name, "y", e.target.value);
    console.log("errors", errors);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(handleValidacion({ ...input, [e.target.name]: e.target.value }));
    //---------------setInput3
    let var1;
    if (allClientes) {
      var1 = allClientes[allClientes?.length - 1]?.id
        ? allClientes[allClientes.length - 1].id
        : "";
    }

    setInput3({
      ...input3,
      [e.target.name]: e.target.value,
      cliente_id: var1,
    });
    //-------------setInput3

    console.log("input1----------\n", input);
    console.log("input3----------\n", input3);
  }
  //--------------fin handleOnChange

  //--------------handleOnOptionsSelect
  let handleOnOptionsSelect = (e) => {
    console.log("----handleOnOptionsSelect---e---", e.target.value);
    setInput({
      ...input,
      ["types"]: [...input.types, e.target.value],
      ["agente_id"]: [...input.agente_id, e.target.value],

      //types: [...input.types, e.target.value],
      //
    });
    setErrors(handleValidacion({ ...input, [e.target.name]: e.target.value }));
  };
  //--------------fin handleOnOptionsSelect

  //--------------handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    let mm = errors;
    if (input.name == "") {
      setErrors(handleValidacion({ ...input, ["name"]: "" }));
      return alert("debe de agregar cada valor!!");
    }
    if (!input.types.length == 0) {
      setErrors(handleValidacion({ ...input, ["types"]: input.types }));
    }

    if (
      mm.nombre ||
      mm.cedula ||
      mm.celular ||
      mm.dirección ||
      mm.ciudad ||
      mm.departamento ||
      mm.types
    ) {
      console.log("errors", errors);
      return alert("debe de agregar cada valor!!");
    } else {
      dispatch(postCard(input2));
      dispatch(getClientes());

      console.log("despachar input------", input);
      console.log("despachar input2-----", input2);
      console.log("despachar input3-----", input3);

      alert("Cliente creado!!");
    }

    //------------------
    if (allClientes) {
      setInput3({
        ...input3,
        cliente_id: allClientes[allClientes.length - 1].id,
      });
    }

    dispatch(postCiudad(input3b));

    //--------------------
    setInput({
      nombre: "",
      cedula: "",
      celular: "",
      dirección: "",
      ciudad: "",
      departamento: "",
      agente_id: "",
      types: [],
      // inDb: "",
    });
    // antes.push("/home");
  }
  //-------------fin handleSubmit

  //-------------handleValidacion
  let alfabetico = /^[a-z]+$/;
  let numerico = /^[0-9]+$/;
  const url = /^(ftp|http|https):\/\/[^ "]+$/;
  let handleValidacion = (input) => {
    let errors = {};
    //10
    if (input.types.length === 0 || input.types.length > 1) {
      errors.types = `Seleccione un solo Agente`;
    } else {
      //1
      if (!input.nombre || !alfabetico.test(input.nombre)) {
        errors.nombre =
          "Solo se permite caracteres del alfabeto (a hata la z), no se permite vacio";
      } else {
        if (
          !numerico.test(input.cedula) ||
          input.cedula > 4000000000 ||
          input.cedula < 1
        ) {
          errors.cedula = "Se espera un valor numerico para la cedula";
        } else {
          if (
            !numerico.test(input.celular) ||
            input.celular > 4000000000 ||
            input.celular.length < 1
          ) {
            errors.celular = "Se espera un valor numerico para la celular";
          } else {
            if (input.dirección.length < 5) {
              errors.dirección = "Se espera un a direccion valida";
            } else {
              if (
                !input.ciudad ||
                !alfabetico.test(input.ciudad) ||
                input.ciudad.length < 4
              ) {
                errors.ciudad =
                  "Solo se permite caracteres del alfabeto (a hata la z), no se permite vacio";
              } else {
                if (
                  !input.departamento ||
                  !alfabetico.test(input.departamento) ||
                  input.departamento.length < 4
                ) {
                  errors.departamento =
                    "Solo se permite caracteres del alfabeto (a hata la z), no se permite vacio";
                }
              }
            }
          }
        }
      }
    }
    return errors;
  };
  //-------------fin handleValidacion

  //-------------handleDelete
  function handleDelete(elBorrar) {
    setInput({
      ...input,
      types: input.types.filter((el) => el !== elBorrar),
    });
  }
  //-------------Fin handleDelete
  //-------------handleDelete
  function handleBoton(elBorrar) {
    if (allClientes) {
      console.log("siis EN EL", allClientes[allClientes.length - 1].id);
      setInput3({
        ...input3,
        cliente_id: allClientes[allClientes.length - 1].id,
      });
    }

    dispatch(postCiudad(input3b));

    console.log("------------la input3 es", input3);
  }
  //-------------Fin handleDelete

  //---- fin de logica----
  let x;
  return (
    <div>
      <h1 className={estilos.title}>Seccion de Creacion de Cliente</h1>
      {/* <button className={estilos.boton} onClick={() => handleBoton()}>
        actualiza
      </button> */}
      <Link to="/home">
        <button className={estilos.boton} onClick={() => handleBoton()}>
          VOLVER
        </button>
      </Link>
      <form
        action=""
        onSubmit={(e) => {
          return handleSubmit(e);
        }}
        className={estilos.formulario}
      >
        {/* ------------Tipo----------------- */}
        <div className={estilos.typocontainer}>
          <div className={estilos.selectTipo}>
            <label className={estilos.selectTypes__text}>
              Seccione un agente
            </label>
            <select
              name=""
              id=""
              onChange={(e) => handleOnOptionsSelect(e)}
              className={estilos.selecttiposelec}
            >
              {types.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.nombre}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="" className={estilos.error}>
            {errors.types && <p>{errors.types}</p>}
          </label>
          <div className={estilos.formulariotypo}>
            {input.types.map((el) => (
              <div key={el}>
                {/* <p>{el}</p> */}
                <button
                  type="button"
                  onClick={() => handleDelete(el)}
                  className={estilos.fuente}
                >
                  x
                </button>
                <span>{el}</span>
              </div>
            ))}
          </div>
        </div>
        {/* ------------Nombre----------------- */}

        <div>
          <label htmlFor="">Nombre:</label>
          <input
            type="text"
            value={input.nombre}
            name="nombre"
            placeholder=" Nombre..."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.nombre && <p>{errors.nombre}</p>}
          </label>
        </div>
        {/* <p>{errors.name}</p> */}
        <div>
          <label htmlFor="">Cedula:</label>
          <input
            type="text"
            value={input.cedula}
            name="cedula"
            placeholder="cedula..."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.cedula && <p>{errors.cedula}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">celular:</label>
          <input
            type="text"
            value={input.celular}
            name="celular"
            placeholder="celular..."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.celular && <p>{errors.celular}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">dirección:</label>
          <input
            type="text"
            value={input.dirección}
            name="dirección"
            placeholder="dirección.."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.dirección && <p>{errors.dirección}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">ciudad:</label>
          <input
            type="text"
            value={input.ciudad}
            name="ciudad"
            placeholder="ciudad..."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.ciudad && <p>{errors.ciudad}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">Departamento:</label>
          <input
            type="text"
            value={input.departamento}
            name="departamento"
            placeholder="departamento..."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.departamento && <p>{errors.departamento}</p>}
          </label>
        </div>

        {/* <ul>
          <li>{input.types.map((el) => el + ",")}</li>
        </ul> */}
        <button type="submit" className={estilos.boton}>
          {" "}
          Crear Cliente
        </button>
      </form>
    </div>
  );
}

// <input
//   type="text"
//   placeholder="pokemon a buscar..."
//   onChange={(e) => handleInputOnChange(e)}
// />;
