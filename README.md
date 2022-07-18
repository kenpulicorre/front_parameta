# Individual Project - laravel inicio

## Objetivos del Proyecto

Descripción de la prueba

La empresa Company INC desea realizar un programa que le permita el registro de sus clientes y una posterior asignación de uno de sus agentes de servicio para la gestión.

Requerimientos del programa

Requisitos:
Interacción - JS
Utilice un framework que permita ayudar en la creación de interfaces adaptables en diferentes dispositivos web con CSS y JavaScript, tales como Bootstrap / Foundation / Materialize.
Utilice fuentes de proveedores como lo es Google Font.
Utilice su propia fuente de iconos.
Idóneo utilizar preprocesadores como LESS / SASS o cualquier tipo de marco CSS si lo desea. (Si prefiere utilizar CSS puro también es una opción, pero debe argumentar los beneficios)
En responsive plante la visual y su diagramación.

Solo agregue interacción en el banner principal referente a la votación.

Requerimientos:
Cree una fuente de datos en formato JSON con la estructura que mejor se adapte al contenido de las casillas de votación y complete el contenido inicial a partir de ella.
El usuario puede seleccionar el botón "me gusta" o " no me gusta" en la card del banner principal. Ideal plantear un estado para el botón Me gusta o no Me gusta y que el usuario perciba la microinteración.
Una vez que el usuario hace clic en el botón "Votar ahora", se muestra un mensaje que dice "Tu voto ha sido registrado!" así como un botón de votar de nuevo que vuelve a traer la card inicial.
No hay límite en la cantidad de votos.
Las barras de porcentaje deben cambiar dependiendo de los votos positivos o negativos.
Piense en una forma de conservar los votos actuales para que, si se actualiza la página, los datos no se pierdan. (podría ser local en el navegador o en el servidor si tiene esas habilidades).
Queremos conocer sus habilidades del DOM JS, así que no use jQuery.
Puede resolver esta parte con JS y algunos patrones, o el ideal Angular > v4 como framework. Utilice el que le resulte más cómodo.
Entrega:
Muéstrenos un vistazo de lo que le encanta hacer (y de lo que conoce mejor).
Escriba en un archivo readme.md para hacer referencia a cualquier aspecto clave que desee mencionar sobre lo que aplicó en el ejercicio y / o cualquier otra información relevante sobre los pasos para poner en marcha el proyecto.
Envíe un enlace apuntando a su repositorio (Github, Bitbucket) que incluye el recurso. La rama maestra debe contener todo el ejercicio.

## fin

## Comienza

1.  Forkear el repositorio para poder ejecutarlo desde tu terminal

**IMPORTANTE:** se requiere corra el back previamente si desea tener una ejecucion con la base de datos.

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sistema
DB_USERNAME=root
DB_PASSWORD=
```

donde **sitema ** es el nombre de la base de datos que se crea en **_phpMyadmin_**
**IMPORTANTE2:** debe de tener preente que para ejecutar la aplicacion en front, debe tener ejecutandose primeramente el servidor con la base de datos, para que se logren guardar los datos.

## Documentacion postman

La idea general es crear una aplicación en la cual se puedan hacer peticiones http, por lo mismo se utiliza postman para ello: [postman](https://documenter.getpostman.com/view/19592464/UzQpx83a)

## Archivo back:

[link de back]()

## Archivo front:

[link de front](https://github.com/kenpulicorre/)

para ejecutar el archivo front, solo debe de dirijirse a la carpeta `cliente` y dijitar

```
npm install
```

y una vez se tengan instaladas las dependencias ejecutar la aplicacion,

```
npm start
```
