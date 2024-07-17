import { AxiosRequestConfig } from "axios"
import useAxios from "./useAxios"
import { baseUrl } from "../config/urls"

const useSignIn = () => {
    const configObj : AxiosRequestConfig = {
        baseURL: baseUrl
    }
    const {response, error, loading, refetch} = useAxios(configObj)
}