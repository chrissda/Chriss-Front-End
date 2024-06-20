import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options = {method:'get', data:null}) => {
    const [data, setData] = useState(null); //para los datos
    const [error, setError] = useState(null); //para los errores
    const [loading, setLoading] = useState(false);//para saber si la peticion esta en proceso

    const fetchData = async () => {
        try {
            setLoading(true); //esta cargando
            const response = await axios({url, ...options});//peticion
            setData(response.data);//axios me da la info en response.data
        } catch (error) {
            setError(error);
        } finally { //se va ejecutar si o si ya se la peticion tenga exito o no
            setLoading(false);
        }
    }

    useEffect(() => {
        const startFetch = async () => {
            fetchData()
        }
        startFetch();
    }, [url, options.method, options.data])

    return {data, error, loading};
}

export default useAxios;