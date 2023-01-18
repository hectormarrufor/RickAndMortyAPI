# HW 03: Promises | Integración

## **🕒 Duración estimada**

x minutos

<br />

---

## **💻 Rick & Morty App**

### **📝 INTRO**

En esta homework vamos a seguir trabajando en nuetra App de Rick & Morty del lado del servidor. En esta ocasión crearemos algunas rutas asincrónicas que nos permitirán darle mejor funcionamiento a nuestra aplicación.

Crearemos una ruta para manejar las funcionalidades:

-  GET onSearch
-  GET Detail
-  GET favorites
-  POST favorites
-  DELETE favorites

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1**

### **GET Search**

1. Si observas, dentro de la carpeta **02- Integration** hay un archivo llamado [**toJSON.js**](./toJSON.js). Este archivo contiene una función que te permitirá convertir un objeto de JavaScript a formato JSON. Copia este archivo y pégalo dentro de la carpeta `utils` en tu proyecto Back-End.

2. Dirígete a tu carpeta `controllers` y crea un archivo llamado `getCharById.js`. Dentro de este archivo deberás:

   -  Importar la función **`toJSON`**.

   -  Declarar una variable con el nombre "_getCharById_" y exportarla. Esta variable será una función que recibe dos parámetros: **res** y **id**.

   -  Dentro de la función deberás hacer una petición (_código asincrónico_) a la URL `https://rickandmortyapi.com/api/character/`. Debes utilizar promesas para realizar esto. Recuerda que debes agregar el ID recibido por parámetro al final de esta URL.

   -  Una vez que tienes la respuesta de la petición, crea un objeto en el que guardarás las propidades **image**, **name**, **gender** y **species** que recibiste como respuesta (todos los datos de la petición se encuentran dentro de una propiedad llamada **data**).

   -  Una vez creado el objeto, deberás devolver una respuesta con status `200`, un Content-Type igual a `application/json`, y finalmente responde el objeto que create pasado como parámetro por la función **`toJSON`**. Te dejamos un ejemplo:

      ```javascript
      res.end(toJSON(objeto));
      ```

   -  En el caso de que la promesa tenga algún fallo es importante que concatenes un `.catch` al final de la promesa para poder manejar el error. Dentro del catch deberás devolver una respuesta con status `500`, un Content-Type igual a `text/plain`, y finalmente responde con la propiedad **message** del error.

> **[NOTA]:** puedes utilizar axios o fetch. ¡Como más gustes!

3. ¡Listo! Ya tenemos nuestro primer controlador. Ahora lo vamos a utilizar en nuestra ruta. Para esto, dirígete al archivo llamado **`src/routes/server.js`**. **Elimina** todo el contenido de este archivo.

4. Dentro de este archvio tendrás que:

   -  Importar **http** y el controlador que creaste.

   -  Crear y levantar un servidor en el puerto **3000**.

   -  Dentro del callback del servidor debes crear un condicional que pregunte si la **url** incluye el string "_**onsearch**_". En el caso de que si lo incluya deberás ejecutar el controlador pasándole como argumentos:

      -  El parámetro **`res`**.

      -  El segundo parámetro debe ser el ID del personaje que recibes mediante la URL.

      > **[PISTA]:** dentro del parámetro **`req.url`** está el id del personaje. Puedes utilizar el método split() para obtenerlo...

<br />

---

### **👩‍💻 EJERCICIO 2**

### **GET Detail**

Ahora crearemos la ruta para obtener el detalle de un personaje.

1. Dirígete a tu carpeta `controllers` y crea un archivo llamado `getCharDetail.js`. Dentro de este archivo deberás:

   -  Importar la función **`toJSON`**.

   -  Declarar una variable con el nombre "_getCharDetail_" y exportarla. Esta variable será una función que recibe dos parámetros: **res** y **id**.

   -  El resto de la lógica de esta función es exactamente igual al ejercicio anterior, con la diferencia que esta vez debes obtener todas estas propiedades del personaje: **image**, **name**, **gender**, **status**, **origin** y **species**.

2. En tu archivo **`server.js`** tienes que:

   -  Importar el nuevo controlador.

   -  Crear un condicional que verifique si la URL recibida incluye el string "_**detail**_". En el caso de que esto sea verdadero tendrás que obtener el ID que recibes al final de la URL, y ejecutar este controlador pasándole como parámetros: **res** y **ID**.

<br />

---

### **👀 COMPROBEMOS...**

Levanta el servidor con el comando:

```bash
    npm start
```

Una vez levantado, verifica lo siguiente:

</br >

### **ON SEARCH**

Ve del lado del Front-End de tu proyecto, y busca la función **onSearch**. En ella deberás eliminar la URL de la API de Rick&Morty y pegar la nueva URL de tu servidor: **`http://localhost:3000/rickandmorty/onsearch/`**. Si levantas tu proyecto deberías de poder utilizar tu search-bar normalmente.

</br >

### **DETAIL**

Ahora queda que vallas a tu componente **Detail.jsx** y reemplaces la URL de la API con esta nueva URL de tu servidor: **`http://localhost:3000/rickandmorty/detail/`**. Ahora podrás ingresar al detalle de cualquier personaje sin problemas.

---

</br >

## **🚨 A TENER EN CUENTA**

Si tu servidor no está levantado, o si los links no fueron bien escritos, tu aplicación no funcionará correctamente.

</br >

---

¡Hemos terminado por ahora!🥳
