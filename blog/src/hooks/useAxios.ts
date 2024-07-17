import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

const useAxios = (configObj: AxiosRequestConfig) => {

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => prev + 1)

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response: AxiosResponse = await axios({ ...configObj, signal: controller.signal })
                setResponse(response.data)
            } catch (err: any) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort();
    }, [reload]);

    return [response, error, loading, refetch]

}

export default useAxios