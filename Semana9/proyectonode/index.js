//en node se utiliza una sintaxis para imports que se llama CommonJS
//import axios from "axios"
const axios = require('axios');

axios.getAdapter('https://reqres.in/api/users?page=2')
.then((respuesta) => console.log(respuesta))
.catch((error) => console.log(error))