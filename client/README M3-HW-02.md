# HW 02: WebServer | Integración

## **🕒 Duración estimada**

x minutos

<br />

---

## **😛 Rick & Morty App**

### **📌 INTRO**

Hasta el momento hemos trabajado en nuestra app Rick and Morty en el lado frontend. A partir de ahora continuaremos con nuestra app desde el lado backend.

En esta homework, vamos a estructurar nuestro proyecto, crear nuestro primer server y conectar front con back.

<br />

---

### **👩‍💻 EJERCICIO 1**

### **Estructuración de Proyecto**

1. Dirígete al directorio donde tienes el proyecto `Rick & Morty` y ábrelo en tu VSC.

2. En la raíz de tu proyecto crea una carpeta llamada `front`.

3. Todo el contenido trabajado durante el módulo 2, guárdalo dentro de la carpeta **front**

4. Crea una segunda carpeta al mismo nivel de la carpeta **front** con el nombre `back`.

5. Dentro de la carpeta **back** crea una nueva carpeta con el nombre de **src**.

6. Dentro de la carpeta **src** debes crear lo siguiente:

   - Un archivo llamado `app.js`.
   - Una carpeta llamada `controllers`.
   - Una carpeta llamada `routes`.
   - Una carpeta llamada `utils`.
   - Una carpeta llamada `test`.

7. Pasa el archivo `data.js` que se encuentra en la carpeta **02 - Integration** a tu carpeta **back/src/utils**.
   <br />

---

### **👩‍💻 EJERCICIO 2**

### **Crea tu primer server**

1. Crea un archivo llamado `server.js` dentro de la carpeta **back/src/routes**.

2. Importa **http** desde el módulo `http`.

3. Crea y levanta el servidor en el puerto **3001**.

4. Dentro del callback del servidor debes crear un condicional que pregunte si la **url** incluye el string `rickandmorty/character`. En caso de que si lo incluya, obtén el personaje por id que llega por **req.url** y que coincida con el personaje en el archivo **data.js**.

5. Envía como respuesta un JSON con toda la información del personaje.

   > **[PISTA]:** dentro del parámetro **`req.url`** está el id del personaje. Puedes utilizar el método split() para obtenerlo...

<br />

---

### **👩‍💻 EJERCICIO 3**

### **Conectar front - back**

1. Abre tu proyecto en la carpeta **front** para poder hacer un pequeño cambio.

2. Dentro del archivo **app.js** tienes una función llamada `onSearch`. La URL a la que le haces la petición es

En el archivo App.js, donde tienes dentro de la función **onSearch**, cambia la ruta get que actualmente llama **<https://rickandmortyapi.com/api/character/>**. Tienes que reemplazarla por esta nueva URL: `http://localhost:3001/rickandmorty`.

> **[NOTA]:** recuerda agregar a la ruta el id.

<br />

---

### **👩‍💻 EJERCICIO 4**

En la carpeta raíz de tu Back-End tendrás que ejecutar el comando:

```bash
    npm init
```

De esta manera crearás un archivo `package.json`.

En este sólo deberás instalarle las librerías **axios** y **nodemon** de la siguiente manera:

```bash
    npm install axios nodemon
```

Una vez hecho esto, dentro del objeto **scripts** tienes que dejar el script **`start`** de la siguiente manera:

```javascript
    "start": "nodemon ./src/routes/server.js",
```

</br >

---

Hemos terminado por ahora!! 🥳 más adelante crearemos más rutas para nuestro frontend. 🚀
